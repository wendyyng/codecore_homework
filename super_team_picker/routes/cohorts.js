const express = require('express');
const knex = require('../db/client');
const router = express.Router()
const { numberPerTeam, countTeam } = require('./assign')

//1. Index of all Posts:
router.get('/', (req,res) => {
    knex('cohorts')
    .orderBy('created_at', 'desc')
    .then(posts => {
      res.render('cohorts/index', {posts: posts}) 
    })
  })

//3. Render New Cohort Template 
router.get('/new', (req, res) => {
  res.render('cohorts/new', {post: false})
})

//4. Create new cohort
router.post('/', (req, res) => {
  knex('cohorts')
  .insert({
    logo_url: req.body.logo_url,
    name: req.body.name,
    members: req.body.members
  })
  .returning('*')
  .then(posts => {
    const post = posts[0]
    res.redirect(`cohorts/${post.id}`)
  })
})

//2.Show a single cohort
//8.Assign teams
router.get('/:id', (req, res) => {
  let method = false
  let quantity = false
  let assignedTeam = false
  if(req.query.method && req.query.number){
    method = req.query.method
    quantity = req.query.number
  }
  knex('cohorts')
  .where('id', req.params.id)
  .first() // 
  .then(cohort => {
    if (!cohort) {
      res.send('No cohort found')
    } else {
      
      if (method === "teamCount"){
        assignedTeam = cohort.members.split(",")
        assignedTeam = countTeam(quantity, assignedTeam)
       }else if(method === "perTeam"){
        assignedTeam = cohort.members.split(",")
        assignedTeam = numberPerTeam(quantity, assignedTeam)
       }

      res.render('cohorts/show', {post: cohort, assignedTeam: assignedTeam, quantity: quantity, number: quantity, 
        method:method})
    }
  })
})
// 5. Render Edit Cohort Template
router.get('/:id/edit', (req, res) => {
  knex('cohorts')
  .where('id', req.params.id)
  .first()
  .then(post => {
    res.render('cohorts/edit', {post: post})
  })
})

//6. Update particular Cohort
router.patch('/:id', (req, res) => {
  knex('cohorts')
  .where('id', req.params.id)
  .update({
    logo_url: req.body.logo_url,
    name: req.body.name,
    members: req.body.members
  })
  .then(() => {
      res.redirect(`/cohorts/${req.params.id}`)
  })
})

//7. Delete
router.delete("/:id", (req, res) => {
  knex('cohorts')
  .where('id', req.params.id)
  .del()
  .then(() => {
    res.redirect('/cohorts')
  })
})


module.exports = router;

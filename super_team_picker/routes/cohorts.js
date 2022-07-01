const express = require('express');
const knex = require('../db/client');
const router = express.Router()

//1. ------------------------Index of all Posts: ---------------
router.get('/', (req,res) => {
    knex('cohorts')
    .orderBy('created_at', 'desc')
    .then(posts => {
      res.render('cohorts/index', {posts: posts}) //render will look into 'views'
    })
  })
  //Added index.ejs

//3. ----------------Render New Cohort Template ------------------------
router.get('/new', (req, res) => {
  res.render('cohorts/new', {post: false})
})

//4. ----------------Create new cohort------------------------
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

  //2.-----------------Show a single cohort----------------------
router.get('/:id', (req, res) => {
    knex('cohorts')
    .where('id', req.params.id)
    .first()
    .then(post => {
      if (!post) {
        res.send('No cohort found')
      } else {
        res.render('cohorts/show', {post: post, temp: false})
      }
    })
  })
// Add show.ejs to show each cohort's page

// 5. ------------------Render Edit Cohort Template--------------
router.get('/:id/edit', (req, res) => {
  knex('cohorts')
  .where('id', req.params.id)
  .first()
  .then(post => {
    res.render('cohorts/edit', {post: post})
  })
})
//Made edit.ejs

module.exports = router;

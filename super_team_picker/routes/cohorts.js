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

  //2.-----------------Show a single cohort----------------------
router.get('/:id', (req, res) => {
    knex('cohorts')
    .where('id', req.params.id)
    .first() // this will grab the first instance that matches the requirements
    .then(post => {
      if (!post) {
        res.send('No cohort found')
      } else {
        res.render('cohorts/show', {post: post, temp: false})
      }
    })
  })
// Add show.ejs to show each cohort's page

module.exports = router;

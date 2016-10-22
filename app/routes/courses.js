const express = require('express');
const request = require('request');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/new', (req, res) => {
  res.render('courses/new');
});

module.exports = router;

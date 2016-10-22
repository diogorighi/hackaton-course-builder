const express = require('express');
const rp = require('request-promise');

const router = express.Router();

const apiUrl = 'http://localhost:3000/api/v1'

router.get('/', (req, res) => {
  var options = {
    method: 'GET',
    uri: `${apiUrl}/courses`,
    json: true
  };

  rp(options)
    .then(courses => res.render('courses/index', {courses}))
    .catch(err => res.render('courses/index', {error: err}));
});

router.get('/new', (req, res) => {
  res.render('courses/new');
});

module.exports = router;

const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('courses/index');
});

module.exports = router;

const express = require('express');
const rp = require('request-promise');
const chapterCtrl = require('../controllers/chapters');

const router = express.Router();

const apiUrl = 'http://localhost:3000/api/v1';

// ============================================================================
// Show form page

router.get('/:id/new', (req, res) => {
  const chapter = {};
  chapter.id = req.params.id;
  res.render('chapters/new', {chapter});
});

// ============================================================================
// Create - CRUD

router.post('/', (req, res) => {
  const chapter = req.body.chapter;

  const options = {
    method: 'POST',
    body: chapter,
    uri: `${apiUrl}/chapters`,
    json: true
  };

  rp(options)
  .then(() => res.redirect(`/courses/${chapter.id}`))
  .catch(err => res.render('chapters/new', {err, chapter}));
});

// ============================================================================

module.exports = router;

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

router.post('/', chapterCtrl.addChapter);

// ============================================================================

module.exports = router;

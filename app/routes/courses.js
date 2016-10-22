const express       = require('express');
const rp            = require('request-promise');
const courseCtrl    = require('../controllers/courses');
const chapterCtrl   = require('../controllers/chapters');
const router        = express.Router();
const apiUrl        = 'http://localhost:3000/api/v1';

// ============================================================================
// Courses

router.get('/', courseCtrl.getAllCourses);
router.get('/:id', courseCtrl.getCourse);

router.post('/', courseCtrl.createCourse);
router.post('/:id', courseCtrl.updateCourse);

router.get('/:id/edit', courseCtrl.formCourse);
router.get('/new', (req, res) => res.render('courses/new'));

// ============================================================================
// Chapters

router.get('/:id/chapter/new', chapterCtrl.formChapter);
router.post('/:id/chapter', chapterCtrl.createChapter);

module.exports = router;

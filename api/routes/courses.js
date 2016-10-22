const express       = require('express');
const mongoose      = require('mongoose');
const router        = express.Router();
const Course        = mongoose.model('Course');
const courseCtrl    = require('../controllers/courses');
const chapterCtrl   = require('../controllers/chapters');

// ============================================================================
// Courses

router.get('/', courseCtrl.getAllCourses);

router.get('/:id', courseCtrl.getCourse);

router.post('/', courseCtrl.createCourse);
router.put('/:id', courseCtrl.updateCourse);

// ============================================================================
// Chapters

router.get('/:id/chapters/:chapterId', chapterCtrl.getChapter);
router.post('/:id/chapters', chapterCtrl.createChapter);

router.put('/:id/chapters/:chapterId', chapterCtrl.updateChapter);

module.exports = router;

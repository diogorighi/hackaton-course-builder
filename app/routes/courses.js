const express       = require('express');
const rp            = require('request-promise');
const courseCtrl    = require('../controllers/courses');
const chapterCtrl   = require('../controllers/chapters');
const contetrCtrl   = require('../controllers/contents');

const router        = express.Router();
const apiUrl        = 'http://localhost:3000/api/v1';

// ============================================================================
// Courses

router.get('/', courseCtrl.getAllCourses);
router.get('/new', courseCtrl.newCourse);

router.get('/:id', courseCtrl.getCourse);
router.get('/:id/edit', courseCtrl.formCourse);

router.post('/', courseCtrl.createCourse);
router.post('/:id', courseCtrl.updateCourse);

// ============================================================================
// Chapters

router.get('/:id/chapters/new', chapterCtrl.newChapter);
router.get('/:id/chapters/:chapterId/edit', chapterCtrl.editChapter);

router.post('/:id/chapters/:chapterId', chapterCtrl.updateChapter);
router.post('/:id/chapters', chapterCtrl.createChapter);

// ============================================================================
// Content

router.get('/:id_course/chapters/:id_chapter/contents/new', contetrCtrl.newContent);



module.exports = router;

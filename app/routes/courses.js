const express       = require('express');
const rp            = require('request-promise');
const courseCtrl    = require('../controllers/courses');
const chapterCtrl   = require('../controllers/chapters');
const contentCtrl   = require('../controllers/contents');
const multer        = require('multer');
const router        = express.Router();
const apiUrl        = 'http://localhost:3000/api/v1';

const mimeTypes = {
  'image/png': '.png',
  'image/jpeg': '.jpg',
  'image/gif': '.gif',
  'video/mp4': '.mp4',
  'audio/x-ms-wma': '.wma',
  'audio/x-wav': '.wav',
  'application/pdf': '.pdf'
};

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './app/uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, Date.now().toString() + mimeTypes[file.mimetype]);
  }
});

const fileFilter = function(req, file, cb) {
  const fileMimeType = file.mimetype;
  const acceptableMimeTypes = Object.keys(mimeTypes);
  const check = acceptableMimeTypes.filter(function(item) {
    return item === fileMimeType;
  });

  if (check.length) {
    // Return true if file is acceptable
    cb(null, true);
  } else {
    // Return false if file is acceptable
    cb(null, false);
  }
};

const upload = multer({storage, fileFilter});

// ============================================================================
// Front-end routers

router.post('/setChapterOrder', function(req, res) {
  res.send(req.body);
});

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
router.get('/:id/chapters/:chapterId/contents/new', contentCtrl.newContent);
router.post('/:id/chapters/:chapterId/contents', upload.single('content[file]'), contentCtrl.createContent);


module.exports = router;

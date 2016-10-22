const express   = require('express');
const mongoose  = require('mongoose');

const router    = express.Router();
const Course    = mongoose.model('Course');

const sendJSONresponse = function(res, status, content) {
  res.status(status).json(content);
};

// ============================================================================
// Create - CRUD

router.post('/', (req, res) => {
  const chapter = req.body;

  Course.findByIdAndUpdate(chapter.id,
    {$push: { "chapters": {title: chapter.title}} },
    (err, course) => {
    if (err) return sendJSONresponse(res, 200, err);

    sendJSONresponse(res, 200, course);
  });
});

module.exports = router;

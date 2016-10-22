const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const Course = mongoose.model('Course');

const sendJSONresponse = function(res, status, content) {
  res.status(status).json(content);
};

// const createJSONresponse = function(isError, message) {
//   return {
//     error: isError,
//     message: message
//   };
// };

router.post('/', (req, res) => {
  const course = req.body.course;

  Course.create(course, function(err, course) {
    if (err) return sendJSONresponse(res, 200, err);
    sendJSONresponse(res, 200, course);
  });
});

module.exports = router;
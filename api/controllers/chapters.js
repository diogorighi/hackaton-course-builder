const express   = require('express');
const mongoose  = require('mongoose');
const router    = express.Router();
const Course    = mongoose.model('Course');
const helpFuncs = require('../funcs.js');


const sendJSONresponse = helpFuncs.sendJSONresponse;

function createChapter(req, res) {
  const courseId  = req.params.id;
  const chapter   = req.body;

  Course.findByIdAndUpdate(courseId,
    {$push: { "chapters": {title: chapter.title}} },
    (err, course) => {
    if (err) return sendJSONresponse(res, 200, err);

    sendJSONresponse(res, 200, course);
  });
}


module.exports = {
  createChapter
};



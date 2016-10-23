const express   = require('express');
const mongoose  = require('mongoose');
const router    = express.Router();
const Course    = mongoose.model('Course');
const helpFuncs = require('../funcs.js');

const sendJSONresponse = helpFuncs.sendJSONresponse;

/**
 * Set chapters order
 * @param {req} requisition
 * @param {res} response
 */

 function setChaptersOrder(req, res) {
  const courseId  = req.params.id;
  const order     = JSON.stringify(req.body);

  Course.findByIdAndUpdate(courseId, {'chapters_order': order}, function(err, course) {
    if (err) return sendJSONresponse(res, 200, err);
    sendJSONresponse(res, 200, course);
  });
}

/**
 * Set contents order
 * @param {req} requisition
 * @param {res} response
 */

 function setContentsOrder(req, res) {
  const courseId  = req.params.id;
  const order     = JSON.stringify(req.body);

  Course.findByIdAndUpdate(courseId, {'chapters_order': order}, function(err, course) {
    if (err) return sendJSONresponse(res, 200, err);
    sendJSONresponse(res, 200, course);
  });
}

/**
 * Create chapter
 * @param {req} requisition
 * @param {res} response
 */

function createChapter(req, res) {
  const courseId  = req.params.id;
  const chapter   = req.body;

  Course.findByIdAndUpdate(courseId,
    {$push: {chapters: {title: chapter.title}}},
    (err, course) => {
      if (err) return sendJSONresponse(res, 200, err);
      sendJSONresponse(res, 200, course);
    }
  );
}

/**
 * Get Chapter
 * @param {req} requisition
 * @param {res} response
 */


function getChapter(req, res) {
  const courseId = req.params.id;
  const chapterId = req.params.chapterId;

  Course.findById(courseId, (err, course) => {
    if (err) return sendJSONresponse(res, 200, err);

    const chapter = course.chapters.find(chapter => {
      return chapter._id == chapterId;
    });

    sendJSONresponse(res, 200, chapter);
  });
}

/**
 * Update Chapter
 * @param {req} requisition
 * @param {res} response
 */

function updateChapter(req, res) {
  const courseId = req.params.id;
  const chapterId = req.params.chapterId;
  const chapter = req.body;

  Course.findOneAndUpdate({'_id': courseId, 'chapters._id': chapterId},
    {
      $set: {
        'chapters.$.title': chapter.title
      }
    },
  (err, course) => {
    if (err) return sendJSONresponse(res, 200, err);
    sendJSONresponse(res, 200, course);
  });
}

// ============================================================================

module.exports = {
  createChapter,
  getChapter,
  updateChapter,
  setChaptersOrder
};

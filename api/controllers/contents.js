const express   = require('express');
const mongoose  = require('mongoose');
const router    = express.Router();
const Course    = mongoose.model('Course');
const helpFuncs = require('../funcs.js');

const sendJSONresponse = helpFuncs.sendJSONresponse;

/**
 * Create Content
 * @param {req} requisition
 * @param {res} response
 */

function createContent(req, res) {
  const courseId  = req.params.id;
  const chapterId = req.params.chapterId;
  const content   = req.body;

  console.log(content);

  Course.findOneAndUpdate({'_id': courseId, 'chapters._id': chapterId},
    {
      $push: {
        'chapters.$.contents': content
      }
    },
  (err, course) => {
    if (err) return sendJSONresponse(res, 200, err);
    sendJSONresponse(res, 200, course);
  });
}

// ============================================================================

module.exports = {
  createContent
};

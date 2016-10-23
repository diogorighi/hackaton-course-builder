const express             = require('express');
const mongoose            = require('mongoose');
const router              = express.Router();
const Course              = mongoose.model('Course');
const Content             = mongoose.model('Content');
const ChaptersContents    = mongoose.model('ChaptersContents');
const helpFuncs           = require('../funcs.js');
const sendJSONresponse    = helpFuncs.sendJSONresponse;

/**
 * Create Content
 * @param {req} requisition
 * @param {res} response
 */

function createContent(req, res) {
  const courseId  = req.params.id;
  const chapterId = req.params.chapterId;
  const content   = req.body;

  // Creating a new content and saving reference
  const newContent  = new Content({
    '_courseId': mongoose.Types.ObjectId(courseId),
    title: content.title,
    content: content.content,
    media_type: content.media_type
  });

  newContent.save(function (err) {
    if (err) return sendJSONresponse(res, 200, err);
    sendJSONresponse(res, 200, courseId);
  });
}


// ============================================================================

module.exports = {
  createContent
};

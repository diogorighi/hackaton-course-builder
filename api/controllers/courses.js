const express   = require('express');
const mongoose  = require('mongoose');
const router    = express.Router();
const Course    = mongoose.model('Course');
const helpFuncs = require('../funcs.js');

const sendJSONresponse = helpFuncs.sendJSONresponse;

/**
 * Get all courses
 * @param {req} requisition
 * @param {res} response
 */

function getAllCourses(req, res) {
  Course.find((err, courses) => {
    if (err) return sendJSONresponse(res, 200, err);

    sendJSONresponse(res, 200, courses);
  });
}

/**
 * Get ONE course
 * @param {req} requisition
 * @param {res} response
 */

function getCourse(req, res) {
  const courseId = req.params.id;
  Course.findById(courseId, (err, course) => {
    if (err) return sendJSONresponse(res, 200, err);

    sendJSONresponse(res, 200, course);
  });
}



/**
 * Create course
 * @param {req} requisition
 * @param {res} response
 */


function createCourse(req, res){
  const course = req.body;

  Course.create(course, function(err, course) {
    if (err) return sendJSONresponse(res, 404, err);
    sendJSONresponse(res, 200, course);
  });
}

/**
 * Update course
 * @param {req} requisition
 * @param {res} response
 */

function updateCourse(req, res) {
  const course = req.body;

  Course.findByIdAndUpdate(course.id, course, function(err, course) {

    if (err) return sendJSONresponse(res, 404, err);
    sendJSONresponse(res, 200, course);
  });
}

module.exports = {
  getAllCourses,
  getCourse,
  createCourse,
  updateCourse,
  sendJSONresponse
};


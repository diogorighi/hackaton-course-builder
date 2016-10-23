const rp      = require('request-promise');
const apiUrl  = 'http://localhost:3000/api/v1';

/**
 * Get all courses
 * @param {req} requisition
 * @param {res} response
 */

function getAllCourses(req, res) {
  const options = {
    method: 'GET',
    uri: `${apiUrl}/courses`,
    json: true
  };

  rp(options)
  .then(courses => res.render('courses/index', {courses}))
  .catch(err => res.render('courses/index', {error: err}));
}

/**
 * Get ONE course
 * @param {req} requisition
 * @param {res} response
 */

function getCourse(req, res) {
  const courseId = req.params.id;

  const options = {
    method: 'GET',
    uri: `${apiUrl}/courses/${courseId}`,
    json: true
  };

  rp(options)
  .then(course => {
    res.render(`courses/show`, {course});
  })
  .catch(err => res.render('courses/index', {err}));
}

/**
 * New course
 * @param {req} requisition
 * @param {res} response
 */

function newCourse(req, res) {
  res.render('courses/new');
}

/**
 * Create course
 * @param {req} requisition
 * @param {res} response
 */

function createCourse(req, res) {
  const course = req.body.course;

  const options = {
    method: 'POST',
    body: course,
    uri: `${apiUrl}/courses`,
    json: true
  };

  rp(options)
  .then(() => res.redirect('/courses'))
  .catch(err => res.render('courses/new', {err}));
}

/**
 * Update course
 * @param {req} requisition
 * @param {res} response
 */

function updateCourse(req, res) {
  const course  = req.body.course;
  course.id     = req.params.id;

  const options = {
    method: 'PUT',
    body: course,
    uri: `${apiUrl}/courses/${course.id}`,
    json: true
  };

  rp(options)
  .then(() => res.redirect('/courses'))
  .catch(err => res.render('courses/new', {err, course}));
}

/**
 * Update course
 * @param {req} requisition
 * @param {res} response
 */

function formCourse(req, res) {
  const courseId = req.params.id;

  const options = {
    method: 'GET',
    uri: `${apiUrl}/courses/${courseId}`,
    json: true
  };

  rp(options)
  .then(course => res.render('courses/edit', {course}))
  // TO DO -> Fix this.
  .catch(err => res.render(`courses/${courseId}/edit`, {err}));
}


module.exports = {
  getAllCourses,
  getCourse,
  newCourse,
  createCourse,
  updateCourse,
  formCourse
};

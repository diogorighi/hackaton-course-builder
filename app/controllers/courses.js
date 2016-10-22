const rp = require('request-promise');

const apiUrl = 'http://localhost:3000/api/v1';

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

module.exports = {
  getAllCourses
};

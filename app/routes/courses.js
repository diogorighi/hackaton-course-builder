const express = require('express');
const rp = require('request-promise');

const router = express.Router();

const apiUrl = 'http://localhost:3000/api/v1'

// ============================================================================
// Get all courses

router.get('/', (req, res) => {
	const options = {
		method: 'GET',
		uri: `${apiUrl}/courses`,
		json: true
	};

	rp(options)
		.then(courses => res.render('courses/index', {courses}))
		.catch(err => res.render('courses/index', {error: err}));
});

// ============================================================================
// Create a course

router.post('/', (req, res) => {
	const course = req.body.course;

	const options = {
		method: 'POST',
		body: course,
		uri: `${apiUrl}/courses`,
		json: true
	};

	rp(options)
		.then( () => res.redirect('/'))
		.catch(err => res.render('courses/new', {err, course}));
});

// ============================================================================
// Edit a course

router.post('/:id', (req, res) => {

	const course 	= req.body.course;
	course.id 		= req.params.id;

	const options = {
		method: 'PUT',
		body: course,
		uri: `${apiUrl}/courses/${course.id}`,
		json: true
	};


	rp(options)
		.then( () => res.redirect('/'))
		.catch(err => res.render('courses/new', {err, course}));

});

// ============================================================================
// Form new course

router.get('/new', (req, res) => {
	res.render('courses/new');
});

// ============================================================================
// Edit course

router.get('/:id/edit', (req, res) => {

	const courseId = req.params.id;

	const options = {
		method: 'GET',
		uri: `${apiUrl}/courses/${courseId}`,
		json: true
	};

	rp(options)
		.then( course => res.render('courses/edit', {course}) )
		.catch(err => res.render(`courses/${courseId}/edit`, {err, course}));


});

module.exports = router;

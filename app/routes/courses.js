const express = require('express');
const rp = require('request-promise');

const router = express.Router();

const apiUrl = 'http://localhost:3000/api/v1'

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

router.get('/new', (req, res) => {
	res.render('courses/new');
});

module.exports = router;

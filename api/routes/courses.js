const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const Course = mongoose.model('Course');

const sendJSONresponse = function(res, status, content) {
	res.status(status).json(content);
};

// ============================================================================
// Get one course

router.get('/:id', (req, res) => {
	const courseId = req.params.id;
	Course.findById(courseId, (err, course) => {
		if (err) return sendJSONresponse(res, 200, err);

		sendJSONresponse(res, 200, course);
	});
});

// ============================================================================
// Get ALL courses

router.get('/', (req, res) => {
	Course.find((err, courses) => {
		if (err) return sendJSONresponse(res, 200, err);

		sendJSONresponse(res, 200, courses);
	});
});

// ============================================================================
// Create course

router.post('/', (req, res) => {
	const course = req.body;

	Course.create(course, function(err, course) {
		if (err) return sendJSONresponse(res, 404, err);
		sendJSONresponse(res, 200, course);
	});
});

// ============================================================================
// Update course

router.put('/:id', (req, res) => {
	const course = req.body;

	Course.findByIdAndUpdate(course.id, course, function(err, course) {

		if (err) return sendJSONresponse(res, 404, err);
		sendJSONresponse(res, 200, course);
	});
});

module.exports = router;

const Course = require('../models/Course');

exports.createCourse = async (req, res) => {
    try {
        const course = await Course.create(req.body);
        res.status(201).json(course);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

exports.getCourses = async (req, res) => {
    try {
        const courses = await Course.findAll();
        res.json(courses);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};
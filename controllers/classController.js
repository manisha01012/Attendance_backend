const Class = require('../models/Class');
const Course = require('../models/Course');
const User = require('../models/User');

exports.createClass = async (req, res) => {
    try {
        const newClass = await Class.create(req.body);
        res.status(201).json(newClass);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

exports.getClasses = async (req, res) => {
    try {
        const classes = await Class.findAll({
            include: [{ model: Course }, { model: User, as: 'teacher' }],
        });
        res.json(classes);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};
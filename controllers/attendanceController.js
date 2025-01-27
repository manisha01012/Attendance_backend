const Attendance = require('../models/Attendance');

exports.createAttendance = async (req, res) => {
    try {
        const attendance = await Attendance.create(req.body);
        res.status(201).json(attendance);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

exports.getAttendanceByClass = async (req, res) => {
    try {
        const { classId, date } = req.params;
        const attendance = await Attendance.findAll({ where: { classId, date } });
        res.json(attendance);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
}; 
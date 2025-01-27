const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/attendanceController');
const { protect, admin } = require('../middleware/authMiddleware');

router.post('/', protect, admin, attendanceController.createAttendance); // Only admins can create attendance records
router.get('/:classId/:date', protect, attendanceController.getAttendanceByClass);

module.exports = router;

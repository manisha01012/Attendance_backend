const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./Test');
const Class = require('./Class');

const Attendance = sequelize.define('Attendance', {
    status: {
        type: DataTypes.ENUM('present', 'absent', 'late', 'excused'),
        allowNull: false
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    studentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }
    },
    classId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Class,
            key: 'id'
        }
    }
}, { timestamps: true, tableName: 'attendance' });

Attendance.belongsTo(User, { foreignKey: 'studentId' });
Attendance.belongsTo(Class, { foreignKey: 'classId' });

module.exports = Attendance;
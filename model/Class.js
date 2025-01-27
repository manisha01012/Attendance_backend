const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');
const Course = require('./Course');
const User = require('./Test');

const Class = sequelize.define('Class', {

    
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    schedule: {
        type: DataTypes.STRING
    },
}, {
    timestamps: true,
    tableName: 'classes'
});

module.exports = Class;
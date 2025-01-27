const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../database.db');

const sequelize = require('../Online_Attendance_Portal/db');

const User = sequelize.define('User',{

    id:{
    type: DataTypes.INTEGER,
    primaryKey: true, 
    autoIncrement: true,
    } ,
    username: {
        type:DataTypes.STRING,
    },
    password: {
        type:DataTypes.STRING,

    }
});

module.exports = User;
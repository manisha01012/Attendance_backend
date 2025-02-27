const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../database/db');

// const sequelize = require('../Online_Attendance_Portal/db');

const User = {
    findByEmail: async (email) => {
        const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        return result.rows[0];
    },
    findById: async (id) => {
        const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
        return result.rows[0];
    },
    create: async (email, password, role) => {
        const result = await pool.query('INSERT INTO users (email, password, role) VALUES ($1, $2, $3) RETURNING *', [email, password, role]);
        return result.rows[0];
    },
    // ... other user-related database operations
};

module.exports = User;
// Example (in app.js or a separate db.sync.js file):
const sequelize = require('./database/db'); // Your Sequelize instance
const User = require('./models/User'); // Import your models
const Course = require('./models/Course');
const Class = require('./models/Class');
const Attendance = require('./models/Attendance')

async function syncDatabase() {
    try {
        await sequelize.sync({ force: false }); // { force: true } will drop existing tables! Use with caution!
        console.log('Database synced successfully.');
    } catch (error) {
        console.error('Error syncing database:', error);
    }
}

syncDatabase();
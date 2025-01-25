const { Sequelize } = require("sequelize")



const sequelize = new sequelize({
    user_name: { type: String, enum: ['student', 'teacher', 'admin'], required: true },
    first_name: { type: String, required: true },
    // ... other fields
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    port: process.env.DB_PORT || 3000,
    logging: process.env.DB_LOGGING === 'true',
    pool: {
        max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
    }
});

async function testConnection() {
    try{
        await sequelize.authenticate();
        console.log('DB connection successful............................');
    }
    catch(error){
        console.error('Unable to connect to the database...............', error);

}    
}
testConnection();

module.exports = sequelize;



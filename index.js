//Initialization
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoute = require('./routes/userRoute');
const sequelize = require('./OnlineAttendance_Portal/db')

//Creating a Server
const app = express();

//Creating a port
const PORT = process.env.PORT || 5432;

//Creating a middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/login',(req, res)=>{
    
})


app.use('/users', userRoute);


//Running on PORT
app.listen(PORT, ()=>{
    console.log(`Server Running on........................ PORT ${PORT}`)
})



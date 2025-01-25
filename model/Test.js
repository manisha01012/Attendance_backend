const {Datatypes} = require(sequelize);

const sequelize = require('../database/db');

const user = sequelize.define('Test',{
    userid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,

    },
    username:{
        type: DataTypes.STRING,
        allowNull: false,
        
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password:{
        type: Datatypes.STRING,
        allowNull:false,

    },

});




module.exports = TextDecoderStream;
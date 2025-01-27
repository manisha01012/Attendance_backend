const {Datatypes} = require(sequelize);

const sequelize = require('../database/db');

const Test = sequelize.define('Tests',{
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




module.exports = Test;
const Test = require('../model/Test')

const getTest = async (req, res)=>{
    try{
        const tests = await Test.findAll();
        res.status(200).json(tests);
        console.log('Retrieve all test users'); 
    }
    catch(error){
        res.status(500).json({error: 'Failed to retrieve test data'});
    }
}

const createTest = async (req, res)=>{
    try{
    const {username, password} = req.body;
    const newtest = await Test.create({username, password});
    res.status(200).json(newtest);
    //yo paxi comment garni ; console line
    console.log('New Test user Created' )
}
    catch(error){
    res.status (500). json({error: 'Failed to create Test user'});
    
}
}

module.exports = {getTest, createTest};


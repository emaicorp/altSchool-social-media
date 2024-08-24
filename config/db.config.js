const mongoose = require('mongoose');
const configVariables = require('./index');

const mongoDBConnection = () => {
    mongoose.connect(configVariables.MONGO_URL)
    .then(()=>{
        console.log("MONGOOSE CONNECTION SUCCESSFUL")
    })
    .catch((error)=>{
        throw new Error("MONGOOSE CONNECTION ERROR",error)
    });
};



module.exports = mongoDBConnection;
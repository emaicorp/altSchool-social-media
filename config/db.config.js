const mongoose = require("mongoose");
const configVariables = require("./config");

const mongoDBConnection = () => {
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("MONGOOSE CONNECTION SUCCESSFUL")
    })
    .catch((error) => {
      console.error("MONGOOSE CONNECTION ERROR", error);
      throw new Error("MONGOOSE CONNECTION ERROR: " + error.message);
    });
};

module.exports = mongoDBConnection;

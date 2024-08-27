const express = require("express");
const app = express();
<<<<<<< HEAD
const mongoDBConnection = require('./config/db.config');

mongoDBConnection();
=======
const router = require("./routes/route");
const errorHandling = require("./error/async.Error")
const mongoDBConnection = require('./config/db.config')
const dotenv =require('dotenv');

dotenv.config();
>>>>>>> 1de237f5682b951655f2ce74972375da52b19e2e

// Connect to MongoDB
mongoDBConnection();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);

// Error handling middleware
app.use(errorHandling);

module.exports = app;
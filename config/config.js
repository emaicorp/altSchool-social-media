const dotenv = require('dotenv');

// Correct way to load the .env file
dotenv.config();

const configVariables = {
  PORT: process.env.PORT || 5000,
  MONGO_URL: process.env.MONGO_URL,
  JWT_SECRET: process.env.JWT_SECRET,
  NODE_ENV: process.env.NODE_ENV || 'development',
};

module.exports = configVariables;

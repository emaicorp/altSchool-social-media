require('dotenv').config();


configVariables= {

  PORT: process.env.PORT || 5000,
  MONGO_URL: process.env.MONGO_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  NODE_ENV: process.env.NODE_ENV || 'development',
};

modules.exports = configVariables;


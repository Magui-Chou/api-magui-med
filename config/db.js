
const mongoose = require('mongoose');

require('dotenv').config({
    path: './.env'
});



const f = async () => {
    mongoose.connect(process.env.DB_URL)
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });
} 

module.exports = f;
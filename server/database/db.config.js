// if (process.env.NODE_ENV != 'production') {
//require('dotenv').config();
// }
require('dotenv').config();

const mongoose = require('mongoose');

async function connectToDb() {
  try {
    // await mongoose.connect(process.env.MONGO_URI);
    await mongoose.connect(process.env.MONGO_URI);
    console.log('DB connection complete');
  } catch (err) {
    console.log(err);
  }
}

//hello there

module.exports = connectToDb;

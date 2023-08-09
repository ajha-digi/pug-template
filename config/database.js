const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    console.log(process.env.MONGODB_URI); // Check if the URI is being read correctly from .env
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
  }
};

module.exports = connectDB; 

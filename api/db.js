const mongoose = require('mongoose');
const mongoURI = process.env.MONGO_URL

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('connected', () => {
  console.log(`Connected to MongoDB`);
});

db.on('error', (err) => {
  console.error(`MongoDB connection error: ${err.message}`);
});

db.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

module.exports = db;

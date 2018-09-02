const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');
// const http = require('http');

require('dotenv').config();

// Add the routes
const articles = require('./routes/api/articles');

const app = express();

// Add the body parser middleware to the express application
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = process.env.MONGO_URI;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


// Passport middleware
app.use(passport.initialize());

// Passport configuration
// require('./config/passport')(passport);

// Use routes
app.use('/api/articles', articles);
// app.use('/api/teams', teams);

// Serve static assets if in production mode
if(process.env.NODE_ENV === 'production') {

  // Set the static folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  });
}

// Setting up the local or production ports

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port: ${port}`));

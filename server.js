/*
 * Assignment 2 Backend
 * Anthony Giugni - 101259556
 * 05-DEC-2021
 */
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const DB_URL = 'mongodb+srv://admin:admin@botrus.wv9zf.mongodb.net/101259556_assignment2_backend?retryWrites=true&w=majority';
const app = express();
const employeeRouter = require('./EmployeeRouter.js');

app.use(bodyParser.urlencoded({ extended: true } ));
app.use(bodyParser.json())

mongoose.Promise = global.Promise;

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
	console.log("Successfully connected to the database mongoDB Atlas Server");    
}).catch(err => {
  console.log('Could not connect to the database. Exiting now...', err);
  process.exit();
});

app.use('/', employeeRouter);
app.get('/', (req, res) => {
	res.send('<h1>Assignment 2 - Backend</h1>');
});
app.listen(8080, () => {
	console.log('Server listening on port 8080');
});

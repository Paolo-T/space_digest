const express = require('express');  //returns a function
const app     = express();           // Call the express function
const path    = require('path');
const morgan  = require('morgan');

var indexRouter = require('./routes');

app.use(morgan('dev')); // Log request info in the console

app.use(express.json()); // Built in middleware. It parses incoming requests with JSON payloads.

// Set static folder to serve html and files
app.use(express.static(path.join(__dirname, 'public')));

// Require routes
app.use('/', indexRouter);

// Error handling
app.use((req, res,  next) => {
	const error = new Error('Unknown Request');
	error.status(404);
	next(error);
});

app.use((error, req, res, next) => {
	res.status(error.status || 500);
	res.json({
		error: {
			message: error.message
		}
	})
});



module.exports = app;







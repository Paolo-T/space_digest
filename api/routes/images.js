const express = require('express');
const router  = express.Router();
const request = require("request");


router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Handling images',
  });
})


const img = router.get("/:id", (req, res) => {
  request('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', { json: true }, (error, response, body) => {
    console.log(req);
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML.

	  res.send(body);

  });
})


module.exports = img;


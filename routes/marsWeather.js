const express = require("express");
const router = express.Router();
const request = require("request");

router.get("/", (req, res, next) => {
    res.status(200).json({
        message: "Handling Mars weather"
    });
});

const img = router.get("/:weather", (req, res) => {
    request(
        "https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0",
        { json: true },
        (error, response, body) => {
            console.log(req);
            console.log("error:", error); // Print the error if one occurred
            console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
            // console.log('body:', body); // Print the HTML.
            console.log("Success!!");
            res.send(body);
        }
    );
});

module.exports = img;

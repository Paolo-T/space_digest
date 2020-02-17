const express = require("express");
const router = express.Router();
const request = require("request");

router.get("/", (req, res, next) => {
    res.status(200).json({
        message: "Handling images"
    });
});

const img = router.get("/:id", (req, res) => {
    request(
        "https://api.nasa.gov/planetary/apod?api_key=24TE7EgNfmXIvdb6vNNZGBWx8s54XbZzCCi2oAdN",
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

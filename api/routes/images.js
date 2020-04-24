const express = require("express");
const router = express.Router();
const request = require("request");

router.get("/", (req, res, next) => {
    res.status(200).json({
        message: "Handling images"
    });
});

const API_BASE_URL = 'https://api.nasa.gov/planetary/apod?';
const API_KEY      = 'api_key=24TE7EgNfmXIvdb6vNNZGBWx8s54XbZzCCi2oAdN';

const mediaRequest = router.get("/:image", (req, res) => {
    request(
        `${API_BASE_URL}${API_KEY}`,
        { json: true },
        (error, response, body) => {
            // console.log(req);
            console.log("error:", error);
            console.log("statusCode:", response && response.statusCode);
            console.log("---->>> Fetched!!");
            res.json({
                date: body.date,
                title: body.title,
                explanation: body.explanation,
                url: body.url,
                hdurl: body.hdurl,
                media_type: body.media_type
            });
        }
    );
});

module.exports = mediaRequest;

const express = require("express");
const router = express.Router();
const request = require("request");

router.get("/", (req, res, next) => {
    res.status(200).json({
        message: "Handling Asteroids"
    });
});

let startDate = '2020-03-01';
let endDate   = '2020-03-03';

const API_BASE_URL = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&`;
const API_KEY      = 'api_key=24TE7EgNfmXIvdb6vNNZGBWx8s54XbZzCCi2oAdN';

const mediaRequest = router.get("/:id", (req, res) => {
    request(
        `${API_BASE_URL}${API_KEY}`,
        { json: true },
        (error, response, body) => {
            // console.log(req);
            console.log("error:", error);
            console.log("statusCode:", response && response.statusCode);
            console.log("Success!!");
            // res.json(body);
            res.json(processAsteroids(body));
        }
    );
});


function processAsteroids(body) {
  let AsteroidData = Object.entries(body).map(Asteroid => {
    return Asteroid[1]
  });
  return AsteroidData[2];
};




module.exports = mediaRequest;

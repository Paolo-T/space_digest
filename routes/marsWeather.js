const express = require("express");
const router = express.Router();
const request = require("request");

const API_BASE_URL = 'https://api.nasa.gov/insight_weather/?';
const API_KEY      = 'api_key=24TE7EgNfmXIvdb6vNNZGBWx8s54XbZzCCi2oAdN';


// router.get("/", (req, res, next) => {
//     res.status(200).json({
//         message: "Handling Mars weather"
//     });
// });

const marsWeather = router.get("/weather", (req, res) => {
    request(
        `${API_BASE_URL}api_key=DEMO_KEY&feedtype=json&ver=1.0`,
        { json: true },
        (error, response, body) => {
            // console.log(req);
            console.log("error:", error); // Print the error if one occurred
            console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
            // console.log('body:', body); // Print the HTML.
            console.log("Success!!");
            res.json(processWeatherData(body));
        }
    );
});

function processWeatherData(body) {
    const sol = body.sol_keys;

    return sol;
}



module.exports = marsWeather;

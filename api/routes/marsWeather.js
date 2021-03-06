const express = require("express");
const router  = express.Router();
const request = require("request");

const API_BASE_URL = 'https://api.nasa.gov/insight_weather/?';
const API_KEY      = 'api_key=24TE7EgNfmXIvdb6vNNZGBWx8s54XbZzCCi2oAdN';
const API_DEMO     = 'api_key=DEMO_KEY&feedtype=json&ver=1.0'


router.get("/", (req, res, next) => {
    res.status(200).json({
        message: "Handling Mars weather"
    });
});

const marsWeather = router.get("/:weather", (req, res) => {
    request(
        "https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0",
        { json: true },
        (error, response, body) => {
            // console.log(req);
            console.log("error:", error);
            console.log("statusCode:", response && response.statusCode);
            console.log("Success!!");
            //  res.json(body);
            res.json(processWeatherData(body));

        }
    );
});


function processWeatherData(body) {
	let solData = body.sol_keys
		.map(sol => {
			return {
				marsSol: sol,
				earth_date: body[sol].First_UTC,
				season: body[sol].Season,
				temperature: {
					max: body[sol].AT.mx,
					min: body[sol].AT.mn,
					average: body[sol].AT.av
				},
			};
        });
	return solData
};

module.exports = marsWeather;
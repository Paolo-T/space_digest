const express = require("express");
const router = express.Router();
const request = require("request");

router.get("/", (req, res, next) => {
	res.status(200).json({
		message: "Handling Asteroids"
	});
});

let startDate = '2020-03-01';
let endDate   = '2020-03-01';

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
			console.log("---->>> Fetched!!");
			// res.json(body);
			res.json(processedResponse(body));
		}
	);
});

function processedResponse({near_earth_objects}) {

	let {"2020-03-01": theDate} = near_earth_objects

	let days = theDate.map(aDate => {
		return {
			id: aDate.id,
			name: aDate.name,
			diameter: parseFloat(aDate.estimated_diameter.meters.estimated_diameter_max).toFixed(2),
			hazardous: aDate.is_potentially_hazardous_asteroid,
			speed: parseFloat(aDate.close_approach_data[0].relative_velocity.kilometers_per_second).toFixed(2),
			approach_date: aDate.close_approach_data[0].close_approach_date_full,
			miss_distance: Math.round(aDate.close_approach_data[0].miss_distance.kilometers)
		}
	});
	return days
	// return theDate

};

module.exports = mediaRequest;

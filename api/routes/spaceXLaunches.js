const express = require("express");
const router  = express.Router();
const request = require("request");

const API_BASE_URL = 'https://api.spacexdata.com/v3/launches';

router.get("/", (req, res, next) => {
    res.status(200).json({
        message: "Handling SpaceX launches"
    });
});

const spaceXLaunches = router.get("/:launch", (req, res) => {
    request(
        `${API_BASE_URL}`,
        { json: true },
        (error, response, body) => {
            // console.log(req);
            console.log("error:", error);
            console.log("statusCode:", response && response.statusCode);
            console.log("Success!!");
            // res.json(body);
            res.json(processLaunches(body));

        }
    );
});

function processLaunches(body) {
	let launches = body
	.map(launch => {
			return {
				name: launch.mission_name,
				patch: launch.links.mission_patch,
				flight_number: launch.flight_number,
				rocket: launch.rocket.rocket_id,
				year: launch.launch_year,
				upcoming: launch.upcoming,
				launch_date: launch.launch_date_local,
				success: launch.launch_success,
				failure_details: launch.launch_failure_details,
				details: launch.details,
				links: launch.links
			};
		});
	return launches
};

module.exports = spaceXLaunches;

const express = require("express");
const router = express.Router();
const request = require("request");

const API_KEY = 'api_key=24TE7EgNfmXIvdb6vNNZGBWx8s54XbZzCCi2oAdN';

router.get("/", (req, res, next) => {
    res.status(200).json({
        message: "Handling Mars Rover Photos"
    });
});

const roverImgs = router.get("/:roverName/photos", (req, res) => {
    request(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&${API_KEY}`,
        { json: true },
        (error, response, body) => {
            console.log(req);
            console.log("error:", error); // Print the error if one occurred
            console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
            // console.log('body:', body); // Print the HTML.
            console.log("Success!!");
            res.json(processPhotos(body));
            // res.json(body);
        }
    );
});

function processManifest(body) {
	let photos = body.photo_manifest.photos
		.map(photo_sol => {
			return {
				sol: photo_sol.sol,
				photos: photo_sol.total_photos,
				cameras: photo_sol.cameras
			}
		}).filter(photo_sol => {
			return photo_sol.cameras.includes(CAMERA);
		});
	return photos;
}

function processPhotos(body) {
	let photos = body.photos
		.map(photo => {
			return {
				img_src: photo.img_src,
                earth_date: photo.earth_date,
                rover: {
                    name: photo.rover.name,
                    status: photo.rover.status,
                    launch_date: photo.rover.launch_date,
                    landing_date: photo.rover.landing_date,
                }
			}
		});
	return photos;
    }

module.exports = roverImgs;


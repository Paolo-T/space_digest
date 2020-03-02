const express = require("express");
const router = express.Router();
const request = require("request");

const API_BASE_URL = 'https://api.nasa.gov/mars-photos/api/v1/';
const API_KEY      = 'api_key=24TE7EgNfmXIvdb6vNNZGBWx8s54XbZzCCi2oAdN';
const CAMERA = "NAVCAM";

const roverManifests = router.get("/:roverName/manifest/", (req, res) => {
    let uri = `${API_BASE_URL}manifests/${req.params.roverName}?${API_KEY}`;
    request(
        uri,{ json: true },
        (error, response, body) => {
            // console.log(req);
            console.log(`calling: ${uri}`);
            console.log("error:", error);
            console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
            // console.log('body:', body);
            if (error) { return console.log(error); }
            console.log("Success!!");
            res.json(processManifest(body));
            // res.json(body);
        }
    );
});

const roverImgs = router.get("/:roverName/photos/:sol/", (req, res) => {
    let uri = `${API_BASE_URL}rovers/${req.params.roverName}/photos?sol=${req.params.sol}&camera=${CAMERA}&${API_KEY}`;
    console.log(`calling: ${uri}`);
    request(
        uri,{ json: true },
        (error, response, body) => {
            // console.log(req);
            console.log("error:", error);
            console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
            console.log('body:', body);
            console.log("Success!!");
            res.json(processPhotos(body));
            // res.json(body);
        }
    );
});

function processManifest(body) {
    let manifest_photos = body.photo_manifest.photos;

		manifest_photos.map(manifest_photo => {
			return {
                sol: manifest_photo.sol,
                earth_date: manifest_photo.earth_date,
				photos: manifest_photo.total_photos,
				cameras: manifest_photo.cameras
			}
        })
        .filter(manifest_photo => {
            return manifest_photo.cameras.includes(CAMERA);
		});
	return manifest_photos;
}



function processPhotos(body) {
	let photos = body.photos
		.map(photo => {
			return {
                id:photo.id,
				img_src: photo.img_src,
                earth_date: photo.earth_date,
                name: photo.rover.name,
                status: photo.rover.status,
                launch_date: photo.rover.launch_date,
                landing_date: photo.rover.landing_date,
			}
		});
	return photos;
    }

module.exports = roverImgs;
module.exports = roverManifests;

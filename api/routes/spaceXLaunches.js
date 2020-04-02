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
            res.json(body);
            // res.json(processPhotos(body));

        }
    );
});

// function processPhotos(body) {
// 	let photos = body.collection.items
// 		.map(photo => {
// 			return {
//                 href: photo.links[0].href,
//                 title: photo.data[0].title,
//                 id: photo.data[0].nasa_id,
//                 description: photo.data[0].description,
//                 media_type: photo.data[0].media_type

// 			};
//         });
// 	return photos
// };

module.exports = spaceXLaunches;

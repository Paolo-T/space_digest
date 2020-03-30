const express = require("express");
const router  = express.Router();
const request = require("request");

const API_BASE_URL = 'https://images-api.nasa.gov';
const END_POINT    = '/search?q=space&media_type=image';
// const API_DEMO     = 'api_key=DEMO_KEY&feedtype=json&ver=1.0'

router.get("/", (req, res, next) => {
    res.status(200).json({
        message: "Handling Mars weather"
    });
});

const photoCollection = router.get("/photoCollection", (req, res) => {
    request(
        `${API_BASE_URL}${END_POINT}`,
        { json: true },
        (error, response, body) => {
            // console.log(req);
            console.log("error:", error);
            console.log("statusCode:", response && response.statusCode);
            console.log("Success!!");
            //  res.json(body);
            res.json(body);

        }
    );
});


// function processWeatherData(body) {
// 	let solData = body.sol_keys
// 		.map(sol => {
// 			return {
// 				marsSol: sol,
// 				earth_date: body[sol].First_UTC,
// 				season: body[sol].Season,
// 				temperature: {
// 					max: body[sol].AT.mx,
// 					min: body[sol].AT.mn,
// 					average: body[sol].AT.av
// 				},
// 				pressure: {
// 					max: body[sol].PRE.mx,
// 					min: body[sol].PRE.mn,
// 					average: body[sol].PRE.av,
// 				}
// 			};
//         });
// 	return solData
// };

	// let solData = body.sol_keys
	// 	.map(sol => body[sol].First_UTC)
   // 	.map(item => {
	// 		item.split('T')[0],toString();
	// 		const d = new Date(item);
	// 		const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
	// 		const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
	// 		const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
	// 		const formattedDate = `${da} ${mo}`;

	// 		return formattedDate;
	// 		return "2020-03-03"
   // })



module.exports = photoCollection;

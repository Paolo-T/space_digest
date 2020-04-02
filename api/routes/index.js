const express = require('express');
const router  = express.Router();

router.use('/api/images', require('./images.js'));
router.use('/api/mars-weather', require('./marsWeather.js'));
router.use('/api/mars-rover', require('./marsRoverPhotos.js'));
router.use('/api/asteroids', require('./asteroids.js'));
router.use('/api/photo-collection', require('./photoCollection.js'));
router.use('/api/spacex', require('./spaceXLaunches.js'));

router.get('/test', (req, res) => {
  res.send('Test route')
})

module.exports = router;
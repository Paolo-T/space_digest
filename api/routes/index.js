const express = require('express');
const router  = express.Router();

router.use('/api/images', require('./images.js'));
router.use('/api/marsWeather', require('./marsWeather.js'));
router.use('/api/marsRover', require('./marsRoverPhotos.js'));
router.use('/api/asteroids', require('./asteroids.js'));

router.get('/test', (req, res) => {
  res.send('Test route')
})

module.exports = router;
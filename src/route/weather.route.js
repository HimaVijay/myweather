const express = require('express');

const HomeController = require('../controller/weather.controller');



const router = express.Router();



router.get('/home',HomeController.Home);



router.post('/weatherreport',HomeController.weatherreport);



module.exports = router;
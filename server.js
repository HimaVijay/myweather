const express = require('express');

const dotenv = require('dotenv');

const LoginRoutes = require('./src/route/weather.route')

//const WeatherRoutes = require('./src/route/weather.route')

const app = express();

dotenv.config();

app.use(express.json());

app.use(express.urlencoded({ extended:true}));

app.use(LoginRoutes);

app.set('view engine', 'ejs');

app.set('views','./src/views');

const port = process.env.PORT || 8000

app.listen(port, () => {

    console.log('server is running at', port);

})

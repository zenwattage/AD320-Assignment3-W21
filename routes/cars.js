const express = require('express');
const router = express.Router();

const app = express();
const cars = require('../data/cars.json');
// const path = require('path');
// app.use(express.static(path.join(__dirname, 'data')));

console.log(JSON.stringify(cars, null, "\t"));
// app.get('/cars', function (req, res, next) {

//     let rawdata = fs.readFileSync(cars);
//     let car = JSON.parse(rawdata);
//     console.log(car);
//     res.send(console.log(JSON.stringify(cars)));

// });


module.exports = router;
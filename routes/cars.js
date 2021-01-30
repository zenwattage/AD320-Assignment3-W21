const express = require('express');
const router = express.Router();

const app = express();
const cars = require('../data/cars.json');

router.get('/', function (req, res, next) {
    res.send(JSON.stringify(cars));
});


module.exports = router;
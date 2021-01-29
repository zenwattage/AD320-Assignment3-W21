const express = require('express');
const router = express.Router();
const path = require('path');
const fullPath = path.join(__dirname, "./data/cars.json");
/* simple GET request. */
router.get('/', function (req, res, next) {
  res.send("It's working, yo!!\n" + new Date().toISOString());
});

module.exports = router;

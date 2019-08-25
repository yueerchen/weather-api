const axios = require("../utils/axios");
const express = require("express");
const weather = require("../models/Weather");
const responseFormatter = require("../utils/responseFomatter");
const countryValidate = require("../middlewares/countryValidate");

const router = express.Router();

router.get("/:cc/:city", countryValidate, (req, res, next) => {
    const { cc, city } = req.params;
    const weatherType = req.query.weatherType;
    weather
        .getData(city, cc, weatherType)
        .then(response => responseFormatter(res, 200, null, response))
        .catch(err => next(err));
});

module.exports = router;
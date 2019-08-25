const axios = require("../utils/axios");
const express = require("express");
const weather = require("../models/Weather");
const responseFormatter = require("../utils/responseFomatter");

const router = express.Router();

router.get("/:cc/:city", (req, res, next) => {
    const { cc, city } = req.params;

    weather
        .getData(city, cc)
        .then(response => responseFormatter(res, 200, null, response))
        .catch(err => next(err));
});

module.exports = router;
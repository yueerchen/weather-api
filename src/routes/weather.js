const axios = require("../utils/axios");
const express = require("express");
const weather = require("../models/Weather");

const router = express.Router();

router.get("/:cc/:city", (req, res) => {
    const { cc, city } = req.params;

    weather
        .getData(city, cc)
        .then(response => {
            console.log(response);
            res.send(response);
        })
        .catch(err => console.log(err));
});

module.exports = router;
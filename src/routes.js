const express = require("express");
const router = express.Router();
const weatherRouter = require("./routes/weather");

router.get("/api", (req, res) => {
    res.send("Welcome!");
});

router.use("/api/weather", weatherRouter);

module.exports = router;
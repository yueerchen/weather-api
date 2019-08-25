const express = require("express");
const router = express.Router();
const weatherRouter = require("./routes/weather");
const responseFormatter = require("./utils/responseFomatter");

router.get("/api", (req, res) =>
    responseFormatter(res, 200, "Welcome to the weather api!", null)
);

router.use("/api/weather", weatherRouter);

module.exports = router;
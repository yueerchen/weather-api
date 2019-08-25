const responseFormatter = require("../utils/responseFomatter");

module.exports = (req, res, next) =>
    responseFormatter(res, 404, "Not Found", null);
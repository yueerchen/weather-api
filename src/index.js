require("dotenv").config();
const express = require("express");
const app = express();
const routes = require("./routes");
const helmet = require("helmet");
const morgan = require("morgan");
const logger = require("./utils/logger");
const notFoundHandler = require("./middlewares/notFound");
const errorHandler = require("./middlewares/errorHandler");

const PORT = process.env.PORT || 3000;

app.use(helmet());
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
} else {
    app.use(morgan("common"));
}
app.use(routes);
app.use(errorHandler);
app.use(notFoundHandler);

// const url = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=628e650f04d4e482d94a57c4be379ef7';
// let meta = null;
// request(url, (err, response, body) => {
//     if (err) {
//         console.log(err);
//     } else {
//         meta = JSON.parse(body);
//     }
// });

app.listen(PORT, () => {
    logger.info(`server listen on port ${PORT}`);
});
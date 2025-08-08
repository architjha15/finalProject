const express = require("express");
const cors = require("cors");
const city = require("./Routes/cityRoutes");
const flight = require("./Routes/flightRoutes");
const layover = require("./Routes/layoverRoutes");
const price = require("./Routes/priceRoutes");
const seat = require("./Routes/seatRoutes");
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/city", city);
app.use("/api/flights", flight);
app.use("/api/layover", layover);
app.use("/api/price", price);
app.use("/api/seats", seat);

module.exports = app;

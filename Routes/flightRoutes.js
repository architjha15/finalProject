const flight = require("../Controllers/flightController");
const express = require("express");
const router = express.Router();

router.post("/import", flight.flightInsert);
router.get("/fetch", flight.fetchFlightData);
router.get("/filter", flight.filterFlight);
router.get("/filter_sd", flight.filterSourceDes);

module.exports = router;

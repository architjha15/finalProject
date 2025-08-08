const flight = require("../Services/flightService");

const flightInsert = async (req, res) => {
  try {
    await flight.importFlight();
    res.status(200).json({ message: "Flight data successfully imported." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const fetchFlightData = async (req, res) => {
  try {
    const data = await flight.fetchFlight();
    res.status(200).json({ message: data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const filterFlight = async (req, res) => {
  const { stringDate } = req.body;
  if (!stringDate) {
    res.status(400).json({ message: "JSON is empty." });
  } else {
    try {
      const dataFilter = await flight.flightToFilter(stringDate);
      res.status(200).json({ message: dataFilter });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

const filterSourceDes = async (req, res) => {
  const { stringDate, source, destination } = req.body;
  if (!stringDate || !source || !destination) {
    res.status(400).json({ message: "JSON is empty." });
  } else {
    try {
      const dataFilter = await flight.flightToFilterSD(
        stringDate,
        source,
        destination
      );
      res.status(200).json({ message: dataFilter });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = {
  flightInsert,
  fetchFlightData,
  filterFlight,
  filterSourceDes,
};

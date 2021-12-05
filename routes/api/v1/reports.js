const express = require("express");
const router = express.Router();
const reportsCon = require("../../../controller/api/v1/reportsController");

router.get("/:status", reportsCon.status);

module.exports = router;

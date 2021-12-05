const express = require("express");
const router = express.Router();
const doctorsCon = require("../../../controller/api/v1/doctorsController");

router.post("/login", doctorsCon.login);
router.post("/register", doctorsCon.register);

module.exports = router;

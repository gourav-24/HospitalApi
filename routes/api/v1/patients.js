const express = require("express");
const passport = require("passport");
const router = express.Router();
const patientCon = require("../../../controller/api/v1/patientsController");

router.post(
  "/register",
  passport.authenticate("jwt", { session: false }),
  patientCon.register
);
router.post(
  "/:id/create_report",
  passport.authenticate("jwt", { session: false }),
  patientCon.create_report
);
router.get(
  "/:id/all_reports",
  passport.authenticate("jwt", { session: false }),
  patientCon.all_reports
);

module.exports = router;

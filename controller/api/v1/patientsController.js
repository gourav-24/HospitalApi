const Patient = require("../../../models/patient");
const Report = require("../../../models/report");

// craete a new patient
module.exports.register = async function (req, res) {
  try {
    console.log(req.locals);
    if (req.body.phoneNo && req.body.phoneNo !== "") {
      let patientRec = await Patient.findOne({ phone: req.body.phoneNo });

      // patient rec found
      if (patientRec) {
        return res.status(200).json({
          message: `Patient with phone no: ${req.body.phone} already exist.`,
        });
      }

      // patient record not found
      Patient.create(req.body, function (err, patient) {
        if (err) {
          console.log("error while creating patient");
          return res
            .status(500)
            .json({ message: "Error while creating patient" });
        }
        return res
          .status(200)
          .json({ message: "patient created", patientRec: patient });
      });
    }
  } catch (err) {
    console.log("error in patient register controller" + err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// create a new report for a patient
module.exports.create_report = async function (req, res) {
  try {
    // fetch patient
    if (!req.body || !req.body.status || req.body.status === "") {
      return res.status(200).json({ message: "Status not found" });
    }
    // hardcoded dr
    let reportRec = await Report.create({
      createdByDr: "61aba4f81901c1c52febe1cc",
      patient: req.params.id,
      status: req.body.status,
    });

    return res
      .status(200)
      .json({ message: "report created", report: reportRec });
  } catch (err) {
    console.log("error in create_report controller" + err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// fetch all the reports of given patient
module.exports.all_reports = async function (req, res) {
  try {
    let reportList = await Report.find({ patient: req.params.id })
      .sort({ "-createdAt": "descending" })
      .populate({
        path: "createdByDr",
        select: "name",
      })
      .populate({
        path: "patient",
        select: "name",
      });

    return res
      .status(200)
      .json({ message: "report created", reports: reportList });
  } catch (err) {
    console.log("error in all_reports controller" + err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

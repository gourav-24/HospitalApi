const Report = require("../../../models/report");
// fetch all the reports of specific status
module.exports.status = async function (req, res) {
  try {
    if (req.params.status === "") {
      return res.status(200).json({ message: "Status is empty" });
    }
    let reportList = await Report.find({ status: req.params.status })
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
      .json({ message: "reports fetched", reports: reportList });
  } catch (err) {
    console.log("error in status controller" + err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

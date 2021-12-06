// const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost/hospitalAPI");
// const db = mongoose.connection;

// db.on("error", console.error.bind(console, "error in connecting to database"));

// db.once("open", function () {
//   console.log("Succesfully connected to database");
// });

// GauravHospitalApi fYH7-6*K.92NY7A

// establishing connection with cloud databse
const mongoose = require("mongoose");
const uri =
  "mongodb+srv://GauravHospitalApi:fYH7-6*K.92NY7A@cluster0.rn3ve.mongodb.net/HospitalApi?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on(
  "error",
  console.error.bind(console, "error in connecting to mongo db data base")
);
db.once("open", function () {
  console.log("succesfully connected to mongo db");
});
module.exports = db;

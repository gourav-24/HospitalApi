const jwt = require("jsonwebtoken");
const Doctor = require("../../../models/doctor");

// register doctor (bodies form data)
module.exports.register = async function (req, res) {
  try {
    console.log(req.body);
    // check if email is passed
    if (!req.body.email || req.body.email === "") {
      return res.status(200).json({ message: "Email is not provided" });
    }

    // check if email exist in Doctor database
    let doctorRec = await Doctor.findOne({ email: req.body.email });

    // if doctor exist
    if (doctorRec) {
      return res.status(200).json({
        message: `Doctor with email: ${req.body.email} already exist, kindly try to login`,
      });
    }

    // if doctor dont exist
    Doctor.create(req.body, function (err, doctor) {
      if (err) {
        console.log("error while creating doctor");
        return res.status(500).json({ message: "Error while creating doctor" });
      }
    });

    return res.status(200).json({ message: "doctor created" });
  } catch (err) {
    console.log("error in doctor register controller" + err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// login a doctor and generate an access token
module.exports.login = async function (req, res) {
  try {
    // check if email is passed
    if (!req.body.email || req.body.email === "") {
      return res.status(200).json({ message: "Email is not provided" });
    }

    // check if email exist in Doctor database
    let doctorRec = await Doctor.findOne({ email: req.body.email });
    console.log(doctorRec);
    // if doctor do not exist or password is incorrect
    if (!doctorRec || doctorRec.password !== req.body.password) {
      return res.status(200).json({
        message: `Doctor with email: ${req.body.email} do not exist, kindly register first`,
      });
    }

    // if password is matched and
    //res.locals.doctor = doctorRec;
    return res.status(200).json({
      message: "Sign in successfull, find your access token below",
      data: {
        token: jwt.sign(doctorRec.toJSON(), "test1234", { expiresIn: 1000000 }),
      },
    });
  } catch (err) {
    console.log("error in doctor login controller" + err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

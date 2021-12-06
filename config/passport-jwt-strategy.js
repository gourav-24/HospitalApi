const passport = require("passport");
const JWTstrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
const Doctor = require("../models/doctor");

let opts = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: "test1234",
};

passport.use(
  new JWTstrategy(opts, function (jwtPayLoad, done, req, res) {
    console.log(req);
    console.log(res);
    Doctor.findById(jwtPayLoad._id, function (err, doctor) {
      if (err) {
        console.log("Error in finding user from JWt");
        return;
      }

      if (doctor) {
        console.log("Doctor found: ", doctor);
        //req.locals.doctor = doctor;
        return done(null, doctor);
      } else {
        console.log("Doctor not found");
        return done(null, false);
      }
    });
  })
);

module.exports = passport;

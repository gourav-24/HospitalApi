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

passport.serializeUser(function (user, done) {
  return done(null, doctor._id);
});

passport.deserializeUser(function (id, done) {
  Doctor.findById(id, function (err, doctor) {
    if (err) {
      console.log("error in deserializing doctor");
      return done(err);
    }
    return done(null, doctor);
  });
});

passport.checkAuthentication = function (req, res, next) {
  if (req.isAuthenticated()) {
    //isAuthenticated is a fn by passport to detect if user is logged in
    return next();
  }
  return res.status(402).json("unauthorized");
};

passport.setAuthenticatedUser = function (req, res, next) {
  if (req.isAuthenticated()) {
    res.locals.doctor = req.doctor; // here we are putting user in local object of res for future use since req is handeled by passport
  }
  next();
};
module.exports = passport;

const express = require("express");
const app = express();
const Port = process.env.PORT || 8000;
const db = require("./config/mongoose");
const passport = require("passport");
const passportJWT = require("./config/passport-jwt-strategy");

// parser
app.use(express.urlencoded({ extended: false }));

//initialize passport
app.use(passport.initialize());

//routes
app.use("/", require("./routes/index"));

// start server
app.listen(Port, function (err) {
  if (err) {
    console.log("ERROR in starting the server " + err);
    return;
  }
  console.log("Server is up and running on port: " + Port);
});

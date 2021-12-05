const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/hospitalAPI");
const db = mongoose.connection;

db.on("error",console.error.bind(console,"error in connecting to database"));

db.once("open",function(){
    console.log("Succesfully connected to database");
});
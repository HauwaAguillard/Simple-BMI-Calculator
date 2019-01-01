//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.listen (3000, function(){
  console.log("Server has started on port 3000");
});

app.get("/bmicalculator", function (req, res)
{
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res)
{
  var weight = parseFloat(req.body.w);
  var height = parseFloat(req.body.h);

  var bmi = weight/ Math.pow(height, 2);

  res.send(" <h1> Your BMI is: " + bmi.toFixed(2) + "</h1>");
});

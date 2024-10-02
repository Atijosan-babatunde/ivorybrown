const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
require("dotenv").config();

app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.use(cookieParser());

app.get('', (req, res) => {
  return res.sendFile(__dirname + "/public/home.html");
})

app.get('/about', (req, res) => {
  return res.sendFile(__dirname + "/public/about.html");
})

app.get('/architecture', (req, res) => {
  return res.sendFile(__dirname + "/public/architecture.html");
})

app.get('/contact', (req, res) => {
  return res.sendFile(__dirname + "/public/contact.html");
})

app.get('/devopscloudengineer', (req, res) => {
  return res.sendFile(__dirname + "/public/devopscloudengineer.html");
})

app.get('/liveservice', (req, res) => {
  return res.sendFile(__dirname + "/public/liveservice.html");
})

app.get('/softwaretechnicaldelivery', (req, res) => {
  return res.sendFile(__dirname + "/public/softwaretechnicaldelivery.html");
})

app.get('/training', (req, res) => {
  return res.sendFile(__dirname + "/public/training.html");
})

app.get('/usercenterdesign', (req, res) => {
  return res.sendFile(__dirname + "/public/usercenterdesign.html");
})

port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const nodemailer = require('nodemailer');

require("dotenv").config();

app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.use(cookieParser());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});


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

app.post('/mail', (req, res) => {
    const { name, email, subject, message } = req.body;

    const mailOptions = {
        from: process.env.EMAIL,
        to: process.env.ORGANIZATION_EMAIL,
        subject: subject,
        text: `You have a new message from ${name} (${email})\n\n${message}`,
        html: `<h4>You have a new message from ${name}</h4>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong><br>${message}</p>`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).json({ success: false, message: 'Failed to send email' });
        }
        console.log('Email sent: ' + info.response);
        res.status(200).json({ success: true, message: 'Email sent successfully' });
    });
})

port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
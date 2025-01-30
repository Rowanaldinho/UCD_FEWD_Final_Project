const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.json());

app.post('/sendEmail', (req, res) => {
    const { name, email, phone, date, time, guests } = req.body;

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: 'flavourandfinesse.booking@gmail.com', // Your email
            pass: 'wghy cnzg sgbd ltvq' // Your email password
        }
    });

    const mailOptions = {
        from: 'flavourandfinesse.booking@gmail.com', // Sender address
        to: 'rowan.dardis@gmail.com', // List of recipients
        subject: 'Table Booking Confirmation',
        text: `New booking request from ${name}.\n\nDetails:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nDate: ${date}\nTime: ${time}\nGuests: ${guests}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send({ success: false, error });
        } else {
            console.log('Email sent: ' + info.response);
            res.send({ success: true });
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
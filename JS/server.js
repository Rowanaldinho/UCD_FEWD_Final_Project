const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/send-booking-email', (req, res) => {
    const { name, email, phone, date, time, guests } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'flavourandfinesse.booking@gmail.com',
            pass: 'wghy cnzg sgbd ltvq'
        }
    });

    const mailOptions = {
        from: 'flavourandfinesse.booking@gmail.com',
        to: 'rowan.dardis@outlook.com',
        subject: 'New Table Booking Request',
        text: `Booking Details:\n
               Name: ${name}\n
               Email: ${email}\n
               Phone: ${phone}\n
               Date: ${date}\n
               Time: ${time}\n
               Number of Guests: ${guests}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

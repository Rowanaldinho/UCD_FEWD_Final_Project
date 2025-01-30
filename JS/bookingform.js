const nodemailer = require('nodemailer');

document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting normally

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;

    // Send email using Nodemailer with Gmail
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

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
            // Display confirmation message
            document.getElementById('confirmationMessage').innerText = 'Your booking request has been sent!';
            document.getElementById('confirmation').style.display = 'block';
        }
    });
});


require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Create a transporter object using Gmail's SMTP
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_PASS, // Your Gmail app password
    },
});

// Function to format date to dd/mm/yyyy
function formatDateToEuropeanFormat(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0'); // Pad single digit days with a zero
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Pad single digit months with a zero
    const year = date.getFullYear();
    
    return `${day}/${month}/${year}`;
}

app.post('/send-booking-email', async (req, res) => {
    const { name, email, phone, date, time, guests } = req.body;

    const formattedDate = formatDateToEuropeanFormat(date); // Format the date here

    // Email to the owner
    const msgToOwner = {
        to: 'rowan.dardis@outlook.com',  // Replace with recipient email
        from: process.env.GMAIL_USER,  // Your Gmail address (must be the same as in the transporter)
        subject: 'New Table Booking Request',
        text: `Booking Details:\n
               Name: ${name}\n
               Email: ${email}\n
               Phone: ${phone}\n
               Date: ${formattedDate}\n  
               Time: ${time}\n
               Number of Guests: ${guests}`,
    };

    // Email to the user
    const msgToUser = {
        to: email, // User's email (email they submitted on the form)
        from: process.env.GMAIL_USER, // Same Gmail address
        subject: 'Booking Confirmation',
        text: `Hello ${name},\n\n
               Your booking has been confirmed!\n
               Booking Details:\n
               Date: ${formattedDate}\n  
               Time: ${time}\n
               Number of Guests: ${guests}\n\n
               Thank you for choosing us! We look forward to serving you.`,
    };

    try {
        // Send the email to the owner and the user
        await transporter.sendMail(msgToOwner);
        await transporter.sendMail(msgToUser);
        res.status(200).send("Booking email sent successfully!");
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({
            message: "Error sending email.",
            error: error.message,
        });
    }
}); 

app.listen(5000, () => {
    console.log('Server running on port 5000');
});

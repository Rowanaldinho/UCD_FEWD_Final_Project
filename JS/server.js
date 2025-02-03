require('dotenv').config();
const express = require('express');
const sgMail = require('@sendgrid/mail');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

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

    const msgToOwner = {
        to: 'rowan.dardis@outlook.com',  // Replace with recipient email
        from: 'flavourandfinesse.booking@gmail.com',  // Must be a verified sender in SendGrid
        subject: 'New Table Booking Request',
        text: `Booking Details:\n
               Name: ${name}\n
               Email: ${email}\n
               Phone: ${phone}\n
               Date: ${formattedDate}\n  
               Time: ${time}\n
               Number of Guests: ${guests}`,
    };

    const msgToUser = {
        to: email, // User's email (email they submitted on the form)
        from: 'flavourandfinesse.booking@gmail.com', // Same verified sender email
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
        // Send email to restaurant owner
        await sgMail.send(msgToOwner);
        // Send confirmation email to user
        await sgMail.send(msgToUser);
        res.status(200).send("Booking email sent successfully!");
    } catch (error) {
        console.error("Error sending email:", error.response ? error.response.body : error.message);
        res.status(500).send("Error sending email.");
    }
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});

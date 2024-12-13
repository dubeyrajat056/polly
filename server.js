const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Static folder for serving your HTML files
app.use(express.static(path.join(__dirname, 'public')));

// Your Gmail credentials (Don't forget to replace with your actual Gmail credentials)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com',   // Replace with your Gmail email
        pass: 'your-email-password'     // Replace with your Gmail app password
    }
});

// POST route to handle the form submission
app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: 'your-email@gmail.com',
        to: 'recipient-email@gmail.com', // Replace with the recipient's email
        subject: 'New Form Submission from ' + name,
        text: `You have received a new message from the contact form:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.json({ success: false, error: 'There was an error sending your message. Please try again later.' });
        } else {
            console.log('Email sent: ' + info.response);
            return res.json({ success: 'Your message has been sent successfully!' });
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

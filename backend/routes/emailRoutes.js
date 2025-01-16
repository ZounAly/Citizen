const express = require('express');
const nodemailer = require('nodemailer');
const QRCode = require('qrcode'); // QR Code generation library
const router = express.Router();

router.post('/send-email', async (req, res) => {
    const { email, subject, message, qrCodeContent } = req.body;

    try {
        // Generate QR code as a buffer
        const qrCodeBuffer = await QRCode.toBuffer(qrCodeContent);

        // Configure Nodemailer
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'emailshaheryar@gmail.com',
                pass: '',
            },
        });

        // Email Content
        const mailOptions = {
            from: email,
            to: 'emailshaheryar@gmail.com', // Use the provided recipient email
            subject,
            html: `
                <p>${message}</p>
            `,
            attachments: [
                {
                    filename: 'qrcode.png',
                    content: qrCodeBuffer,
                    contentType: 'image/png',
                },
            ],
        };

        // Send the email
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully with QR Code attached!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send email' });
    }
});

module.exports = router;

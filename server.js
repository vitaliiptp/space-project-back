const express = require('express');
require("dotenv").config();
const cors = require("cors");
const nodemailer = require("nodemailer")


const app = express();
const port = process.env.PORT || 3000;



app.use(cors());
app.use(express.json());
app.listen(port, () => console.log(`Server is listening on port ${port}`))


let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
        clientId: process.env.OAUTH_CLIENTID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN
    }
});



transporter.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready to Send");
    }
});


app.post('/api/contact', (req,res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const mail = {
        from: name,
        to: process.env.MAIL_USERNAME,
        subject: "Contact Form Submission",
        html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
    };
    transporter.sendMail(mail, (error) => {
        if (error) {
            res.json({ status: "ERROR" });
        } else {
            res.json({ status: "Message Sent" });
        }
    });
});

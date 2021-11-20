require("dotenv").config();
const formsRouter = require('express').Router();
const Form = require('../models/form');



formsRouter.post('/', (req,res) => {
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
    Form.transporter.sendMail(mail, (error) => {
        if (error) {
            res.json({ status: "Error", msg: "Sorry, service was disconnected" });
        } else {
            res.json({ status: "Success", msg: "Message Sent" });
        }
    });
});



module.exports = formsRouter;
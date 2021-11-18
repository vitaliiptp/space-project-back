require("dotenv").config();
const nodemailer = require("nodemailer")
const Joi = require('joi');


const validate = (data, forCreation = true) => {
    const presence = forCreation ? 'required' : 'optional';
    return Joi.object({
        title: Joi.string().max(255).presence(presence),
        director: Joi.string().max(255).presence(presence),
        year: Joi.number().integer().min(1888).presence(presence),
        color: Joi.boolean().presence(presence),
        duration: Joi.number().integer().min(1).presence(presence),
    }).validate(data, { abortEarly: false }).error;
};

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





module.exports = {
    validate,
    transporter
}


const express = require('express');
const app = express();
const cors = require("cors");
const { setupRoutes } = require('./routes');
const connection = require("./db-config");

app.use(express.json());
app.use(cors());

setupRoutes(app);

const port = process.env.PORT || 3000;


connection.connect((err) => {
    if (err) {
        console.error('error connecting: ' + err.stack);
    } else {
        console.log('connected as id ' + connection.threadId);
    }
});


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});




//
// const express = require('express');
// require("dotenv").config();
// const cors = require("cors");
// const nodemailer = require("nodemailer")
// const connection = require("./db-config");
//
//
// const app = express();
// const port = process.env.PORT || 3000;
//
//
//
// connection.connect((err) => {
//     if (err) {
//         console.error('error connecting: ' + err.stack);
//     } else {
//         console.log('connected as id ' + connection.threadId);
//     }
// });
//
//
//
// app.use(cors());
// app.use(express.json());
// app.listen(port, () => console.log(`Server is listening on port ${port}`))
//
//
// let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         type: 'OAuth2',
//         user: process.env.MAIL_USERNAME,
//         pass: process.env.MAIL_PASSWORD,
//         clientId: process.env.OAUTH_CLIENTID,
//         clientSecret: process.env.OAUTH_CLIENT_SECRET,
//         refreshToken: process.env.OAUTH_REFRESH_TOKEN
//     }
// });
//
//
//
// transporter.verify((error) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log("Ready to Send");
//     }
// });
//
//
// app.post('/api/contact', (req,res) => {
//     const name = req.body.name;
//     const email = req.body.email;
//     const message = req.body.message;
//     const mail = {
//         from: name,
//         to: process.env.MAIL_USERNAME,
//         subject: "Contact Form Submission",
//         html: `<p>Name: ${name}</p>
//            <p>Email: ${email}</p>
//            <p>Message: ${message}</p>`,
//     };
//     transporter.sendMail(mail, (error) => {
//         if (error) {
//             res.json({ status: "ERROR" });
//         } else {
//             res.json({ status: "Message Sent" });
//         }
//     });
// });

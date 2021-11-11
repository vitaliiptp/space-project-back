const express = require('express');
const cors = require("cors");
const app = express();

const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.post('/api/contact', (req,res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    console.log(name, email, message)
    res.status(200).send(`${name} + ${email} + ${message}`)
    }
);





app.listen(port, () => console.log(`Server is listening on port ${port}`))
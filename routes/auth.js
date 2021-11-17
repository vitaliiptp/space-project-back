const authRouter = require('express').Router();
const User = require('../models/user');



// Route to login existing user, if it exists in the database
authRouter.post('/checkCredentials', (req, res) => {
    const { email, password } = req.body;
    User.findByEmail(email).then((user) => {
        if (!user) res.status(401).send('Invalid credentials');
        else {
            User.verifyPassword(password, user.hashedPassword).then(
                (passwordIsCorrect) => {
                    if (passwordIsCorrect) res.status(200).send(`User ${email} is logged in`);
                    else res.status(401).send('Invalid credentials');
                }
            );
        }
    });
});



module.exports = authRouter;
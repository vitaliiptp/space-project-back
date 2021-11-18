const formsRouter = require('./forms');
const usersRouter = require('./users');
const authRouter = require('./auth');


const setupRoutes = (app) => {
    app.use('/api/contact', formsRouter);
    app.use('/api/users', usersRouter);
    app.use('/api/auth', authRouter);
};


module.exports = {
    setupRoutes
};

const express = require('express');
const apiRouter = require('./routes');
const errorMiddleware = require('./middlewares/error.middleware');

const app = express();

app.use(express.json());

// versioned API
app.use('/api/v1', apiRouter);

// global error handler
app.use(errorMiddleware);

module.exports = app;
'use strict';
const express = require("express");
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

app.set("port", process.env.PORT || 3001);

// set config
const env = process.env.NODE_ENV || 'dev';
const config = require('./config/' + (env + '.json'));
app.set('config', config);

// set logger
const logger = require('./logger')(app);
app.set('logger', logger);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Routes
require('./routes/routes')(app);

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static("client/build"));
    app.use(morgan('common'));
} else {
    app.use(morgan('dev'));
}

// catch 404 and forward to error handler
app.use((req, res, next) => {
    logger.error('404 page requested');
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'dev' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.send('error');
});

app.listen(app.get("port"), () => {
    console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});

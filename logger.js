'use strict';
const winston = require("winston");

module.exports = app => {
    const config = app.get('config');
    const level = config.logLevel;

    return new winston.Logger({
        transports: [
            new winston.transports.Console({
                level: level,
                timestamp: () => {
                    return (new Date()).toISOString();
                }
            })
        ]
    });
};
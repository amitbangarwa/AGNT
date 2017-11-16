'use strict';
const axios = require("axios");

module.exports = (app) => {

    const beerConfig = app.get('config').beerEndpoint;
    const logger = app.get('logger');

    function getBeers(req, res, next) {
        let query = req.query;
        if (query.hasOwnProperty('q')) {
            axios.get(beerConfig.url.search + '&q=' + query.q + '&type=' + beerConfig.type)
                .then(function (response) {
                    res.json(response.data);
                })
                .catch(function (error) {
                    logger.error(error);
                    return next(error);
                });
        } else {
            logger.error('Query not found');
            return next('Query not found');
        }
    }

    return {
        getBeers: getBeers
    }
};
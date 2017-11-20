'use strict';
const axios = require("axios");

module.exports = (app) => {

    const beerConfig = app.get('config').beerEndpoint;
    const logger = app.get('logger');

    function getBeers(req, res, next) {
        let query = req.query;
        if (query.hasOwnProperty('q')) {
            let url = '';
            if (query.hasOwnProperty('pageNumber')) {
                url = beerConfig.url.search + '&q=' + query.q + '&type=' + beerConfig.type + '&p=' + query.pageNumber;
            } else {
                url = beerConfig.url.search + '&q=' + query.q + '&type=' + beerConfig.type;
            }
            axios.get(url)
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

    function getBeer(req, res, next) {
        let query = req.query;
        if (query.hasOwnProperty('beerId')) {
            let url = beerConfig.url.beer + query.beerId + '?key=' + beerConfig.key;
            axios.get(url)
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
        getBeers: getBeers,
        getBeer: getBeer
    }
};
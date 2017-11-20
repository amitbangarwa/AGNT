module.exports = (app) => {
    const api = require('../app/logic/api')(app);

    // Get all beers
    app.get('/api/beers', api.getBeers);

    app.get('/api/beer', api.getBeer);
};
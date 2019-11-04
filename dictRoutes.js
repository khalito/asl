const {
    renderIndex,
    createNewWordWithFormData,
    addNewWord,
    findWord,
    renderEditWord } = require('./dictControllers');

const getTimestamp = require('./timestamp');

const routes = (app) => {
    app.use((req, res, next) => {
        console.log(`${req.method} request made on ${req.originalUrl} at ${getTimestamp()}`);
    next();
    });

    app.route('/').get((req, res, next) => renderIndex(req, res));

    app.route('/searchResult').get((req, res, next) => findWord(req, res));

    app.route('/newWord').post((req, res, next) => addNewWord(req, res));

    app.route('/editWord').post((req, res, next) => renderEditWord(req, res));
};

module.exports = routes;

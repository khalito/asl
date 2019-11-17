const {
    renderIndex,
    createNewWordWithFormData,
    addWord,
    findWord,
    editWord } = require('./dictControllers');

const getTimestamp = require('./timestamp');

const routes = (app) => {
    app.use((req, res, next) => {
        console.log(`${req.method} request made on ${req.originalUrl} at ${getTimestamp()}`);
    next();
    });

    app.route('/').get((req, res, next) => renderIndex(req, res));

    app.route('/words')
        .get((req, res, next) => findWord(req, res))

        .post((req, res, next) => addWord(req, res));

    app.route('/words/:wordId').post((req, res) => editWord(req, res));
};

module.exports = routes;

const {
    renderIndex,
    createNewWordWithFormData,
    addWord,
    findWord,
    findWordById,
    editWord } = require('./dictControllers');

const getTimestamp = require('./timestamp');

const routes = (app) => {
    app.use((req, res, next) => {
        console.log(`${req.method} request made on ${req.originalUrl} at ${getTimestamp()}`);
    next();
    });

    app.route('/').get((req, res, next) => renderIndex(req, res));

    app.route('/words')
        .get((req, res) => findWord(req, res))
        .post((req, res) => addWord(req, res));

    app.route('/words/:wordId')
        .get((req, res) => findWordById(req, res))
        .post((req, res) => editWord(req, res));
};

module.exports = routes;

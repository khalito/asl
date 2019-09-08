const { mapFormData, addNewWord, findWord } = require('./dictControllers');

const getTimestamp = require('./timestamp');

const routes = (app) => {
    app.use((req, res, next) => {
        console.log(`${req.method} request made on ${req.originalUrl} at ${getTimestamp()}`);
    next();
    });

    app.route('/')
    .get((req, res, next) => {
        res.render('index');
    });

    app.route('/searchResult')
    .get((req, res, next) => {
        findWord(req, res);
    });

    app.route('/newWord')
    .post((req, res, next) => {
        res.locals.word = mapFormData(req.body);
        // console.log(word);
        // res.json(word);
        next();
    }, (req, res, next) => {
        addNewWord(req, res);
    });
};

module.exports = routes;

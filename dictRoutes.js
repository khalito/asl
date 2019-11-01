const {
    renderIndex,
    mapFormData,
    addNewWord,
    findWord,
    renderEditWord } = require('./dictControllers');

const getTimestamp = require('./timestamp');

const routes = (app) => {
    app.use((req, res, next) => {
        console.log(`${req.method} request made on ${req.originalUrl} at ${getTimestamp()}`);
    next();
    });

    app.route('/')
    .get((req, res, next) => {
            renderIndex(req, res);
        }
    );

    app.route('/searchResult')
    .get((req, res, next) => {
        findWord(req, res);
    });

    app.route('/newWord')
    .post(
        (req, res, next) => {
            // first, map the form data to JSON and add the JSON object to the response variables
            // so that we can use the submitted word in addNewWord()
            res.locals.word = mapFormData(req.body);
            // console.log(word);
            // res.json(word); // to test with Postman
            next();
        },
        (req, res, next) => {
            addNewWord(req, res);
        }
    );

    app.route('/editWord')
    .post(
        (req, res, next) => {
            res.locals.word = mapFormData(req.body);
            next();
        },
        (req, res, next) => {
            renderEditWord(req, res);
        }
    );
};

module.exports = routes;

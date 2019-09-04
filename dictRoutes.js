const addNewWord = require('./dictControllers');

function getTimestamp() {
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
    var h = date.getHours();
    var min = date.getMinutes();
    var s = date.getSeconds();
    var formattedDate = d + "." + m + "." + y + " " + h + ":" + min + ":" + s;
    return formattedDate;
}

const routes = (app) => {
    app.route('/')
    .all((req, res, next) => {
        console.log(`${req.method} request made on ${req.originalUrl} at ${getTimestamp()}`);
        next();
    })
    .get((req, res, next) => {
        res.render('index');
    });

    app.route('/searchResult')
    .get((req, res, next) => {
        //query the database
        next();
    }, (req, res, next) => {
        let word = 'this is a test word';
        let type = 'this is a test type';
        let translation = 'this is a test translation';
        let id = 'this is a test id';
        res.render('searchResult', {
            'q' : req.query.q,
            'word' : word,
            'type' : type,
            'translation' : translation,
            '_id' : id
        });
    });

    app.route('/newWord')
    .post((req, res, next) => {
        addNewWord(req, res);
    });
};

module.exports = routes;

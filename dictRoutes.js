const addNewWord = require('./dictControllers');

function getTimestamp() {
    var date = new Date();
    var d = date.getDate();
    var M = date.getMonth();
    var y = date.getFullYear();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var formattedDate = d + "." + M + "." + y + " " + h + ":" + m + ":" + s;
    return formattedDate;
}

const routes = (app) => {
    app.route('/')
    .get((req, res, next) => {
        console.log(`GET request on ${req.originalUrl}`);
        next();
    }, (req, res, next) => {
        res.render('index');
    })
    .post((req, res, next) => {
        console.log('POST request made at: ' + getTimestamp());
        next();
    }, (req, res, next) => {
        addNewWord(req, res);
    });
    // .post(addNewWord);
};

module.exports = routes;

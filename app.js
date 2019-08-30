const express = require('express');
const app = express();
const port = 3001;
const path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, 'public')));
const MongoClient = require('mongodb').MongoClient
const assert = require('assert');
const connected_db = 'dict';
const connected_collection = 'vocab';
const url = 'mongodb://localhost:27017/' + connected_db;
var docCount = 2;

MongoClient.connect(url, function(err, database) {
    assert(err == null);
    console.log("Connected successfully to DB server");
    console.log("Database name: " + database.s.options.dbName);
    const db = database.db(connected_db);
    const collection = db.collection(connected_collection);
    collection.countDocuments(function(err, result) {
        docCount = result;
        console.log(docCount);
    })
})

// app.get('/', function(req, res) {
//     res.render('index');
// })

app.get('/result', function(req, res) {
    let q = req.query['q'];
    res.render('result', {'q' : q});
})

app.get('/', function(req, res, next) {
    res.render('index', {
        'dbName' : connected_db,
        'colName' : connected_collection,
        'docCount' : docCount // why is this not working ??????
    });
)

app.listen(port, () => console.log('Listening on port ' + port));

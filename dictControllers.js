const mongoose = require('mongoose');

const vocabSchema = require('./dictModel');

//const Schema = mongoose.Schema;
//new Schema( {word : String} )
const Word = mongoose.model('vocabulary', vocabSchema);

function addNewWord(req, res) {
    let newWord = new Word(req.body);
    //console.log(req.body);
    newWord.save((err, savedWord) => {
        if (err) {
            res.send(err);
        }
        res.render('newWordResult', savedWord);
    });
}

function findWord(req, res) {
    let q = req.query.q;
}

module.exports = {
    addNewWord,
    findWord
};

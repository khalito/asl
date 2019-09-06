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
    Word.find( {word : q }, (err, result) => {
        let word = result[0].word;
        let type = result[0].type;
        let translation = result[0].translation;
        let id = result[0]._id;
//        console.log(word, type, id);
        res.render('searchResult', {
            'q' : q,
            'word' : word,
            'type' : type,
            'translation' : 'translation',
            '_id' : id
        });
    });
}

module.exports = {
    addNewWord,
    findWord
};

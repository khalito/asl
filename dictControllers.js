const mongoose = require('mongoose');

const vocabSchema = require('./dictModel');

//const Schema = mongoose.Schema;
//new Schema( {word : String} )
const Word = mongoose.model('vocabulary', vocabSchema);

function addNewWord(req, res) {
    let newWord = new Word(req.body);
    console.log(req.body);

    newWord.save((err, savedWord) => {
        if (err) {
            res.send(err);
        }
        res.render('newWord', savedWord); // as it is, this displays the raw json object on the page
    });
}

module.exports = addNewWord;

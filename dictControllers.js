const mongoose = require('mongoose');

const vocabSchema = require('./dictModel');

//const Schema = mongoose.Schema;
//new Schema( {word : String} )
const Word = mongoose.model('vocabulary', vocabSchema);

function mapFormData(i) {
    let newWord = new Word();
    newWord.word = i.word;
    newWord.type = i.type;
    newWord.translation = i.translation;
    newWord.verbs.form1.perfect.ana.ar = i.form1_perfect_ana;
    newWord.verbs.form1.perfect.anta.ar = i.form1_perfect_anta;
    return newWord;
}

function addNewWord(req, res) {
//    console.log(req.body.form1_perfect_ana);
    // let newWord = new Word(req.body);
    let newWord = res.locals.word;
    // //console.log(req.body);
    newWord.save((err, savedWord) => {
        if (err) {
            res.send(err);
        }
        res.render('newWordResult', savedWord);
        // res.json(savedWord);
    });
    // res.render('newWordResult', res.locals.word);
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
            'translation' : translation,
            '_id' : id,
            verbs : {
                form1 : {
                    perfect : {
                        ana : 'I so so so',
                        anta : 'You so so so'
                    }
                }
            }
        });
    });
}

module.exports = {
    mapFormData,
    addNewWord,
    findWord
};

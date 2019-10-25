const mongoose = require('mongoose');

const vocabSchema = require('./dictModel');

//const Schema = mongoose.Schema;
//new Schema( {word : String} )
const Word = mongoose.model('vocabulary', vocabSchema);

function renderIndex(req, res) {
    res.render('index', {
        verbs : {
            form1 : {
                perfect : {
                },
                imperfect : {
                }
            }
        }
    });
}

function mapFormData(i) {
    let newWord = new Word();
    newWord.word = i.word;
    newWord.type = i.type;
    newWord.translation = i.translation;
    newWord.verbs.form1.perfect.ana = i.form1_perfect_ana;
    newWord.verbs.form1.perfect.anta = i.form1_perfect_anta;
    newWord.verbs.form1.perfect.anti = i.form1_perfect_anti;
    newWord.verbs.form1.perfect.huwa = i.form1_perfect_huwa;
    newWord.verbs.form1.perfect.hiya = i.form1_perfect_hiya;
    newWord.verbs.form1.perfect.antuma_male = i.form1_perfect_antuma_male;
    newWord.verbs.form1.perfect.antuma_female = i.form1_perfect_antuma_female;
    newWord.verbs.form1.perfect.huma_male = i.form1_perfect_huma_male;
    newWord.verbs.form1.perfect.huma_female = i.form1_perfect_huma_female;
    newWord.verbs.form1.perfect.nahnu = i.form1_perfect_nahnu;
    newWord.verbs.form1.perfect.antum = i.form1_perfect_antum;
    newWord.verbs.form1.perfect.antunna = i.form1_perfect_antunna;
    newWord.verbs.form1.perfect.hum = i.form1_perfect_hum;
    newWord.verbs.form1.perfect.hunna = i.form1_perfect_hunna;
    newWord.verbs.form1.imperfect.ana = i.form1_imperfect_ana;
    newWord.verbs.form1.imperfect.anta = i.form1_imperfect_anta;
    newWord.verbs.form1.imperfect.anti = i.form1_imperfect_anti;
    newWord.verbs.form1.imperfect.huwa = i.form1_imperfect_huwa;
    newWord.verbs.form1.imperfect.hiya = i.form1_imperfect_hiya;
    newWord.verbs.form1.imperfect.antuma_male = i.form1_imperfect_antuma_male;
    newWord.verbs.form1.imperfect.antuma_female = i.form1_imperfect_antuma_female;
    newWord.verbs.form1.imperfect.huma_male = i.form1_imperfect_huma_male;
    newWord.verbs.form1.imperfect.huma_female = i.form1_imperfect_huma_female;
    newWord.verbs.form1.imperfect.nahnu = i.form1_imperfect_nahnu;
    newWord.verbs.form1.imperfect.antum = i.form1_imperfect_antum;
    newWord.verbs.form1.imperfect.antunna = i.form1_imperfect_antunna;
    newWord.verbs.form1.imperfect.hum = i.form1_imperfect_hum;
    newWord.verbs.form1.imperfect.hunna = i.form1_imperfect_hunna;
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

function wordIsDB(req, res) {

}

function findWord(req, res, next) {
    let q = req.query.q;
    Word.find( {word : q }, (err, result) => {
        if(result) {
            res.render('wordNotFound', { 'q' : q });
        } else {
            let word = result[0].word;
            let type = result[0].type;
            let translation = result[0].translation;
            let id = result[0]._id;
            let form1_perfect_ana = result[0].verbs.form1.perfect.ana;
            let form1_perfect_anta = result[0].verbs.form1.perfect.anta;
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
                            ana : form1_perfect_ana
                        },
                        imperfect : {
                            ana : form1_perfect_anta
                        }
                    }
                }
            });
        }
    });
}

module.exports = {
    renderIndex,
    mapFormData,
    addNewWord,
    findWord
};

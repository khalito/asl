/*jshint esversion: 8 */

const mongoose = require('mongoose');

const vocabSchema = require('./dictModel');

const Word = mongoose.model('vocabulary', vocabSchema);

async function renderIndex(req, res) {
    let countOfWords = await Word.estimatedDocumentCount();

    res.render('index', {
        'countOfWords' : countOfWords,
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

function createNewWordWithFormData(formData) {
    let newWord = new Word();
    console.log('newWord created = ' + newWord);
    let result = mapFormData(newWord, formData);
    return result;
}

function updateWordPropertiesWithFormData(formData) {
    let result = mapFormData2(formData);
    return result;
}

function mapFormData2(formData) {
    let word = {};
    word.word = formData.word;
    word.type = formData.type;
    word.translation = formData.translation;
    word.verbs = {};
    word.verbs.form1 = {};
    word.verbs.form1.perfect = {};
    word.verbs.form1.perfect.ana = formData.form1_perfect_ana;
    word.verbs.form1.perfect.anta = formData.form1_perfect_anta;
    word.verbs.form1.perfect.anti = formData.form1_perfect_anti;
    word.verbs.form1.perfect.huwa = formData.form1_perfect_huwa;
    word.verbs.form1.perfect.hiya = formData.form1_perfect_hiya;
    word.verbs.form1.perfect.antuma_male = formData.form1_perfect_antuma_male;
    word.verbs.form1.perfect.antuma_female = formData.form1_perfect_antuma_female;
    word.verbs.form1.perfect.huma_male = formData.form1_perfect_huma_male;
    word.verbs.form1.perfect.huma_female = formData.form1_perfect_huma_female;
    word.verbs.form1.perfect.nahnu = formData.form1_perfect_nahnu;
    word.verbs.form1.perfect.antum = formData.form1_perfect_antum;
    word.verbs.form1.perfect.antunna = formData.form1_perfect_antunna;
    word.verbs.form1.perfect.hum = formData.form1_perfect_hum;
    word.verbs.form1.perfect.hunna = formData.form1_perfect_hunna;
    word.verbs.form1.imperfect = {};
    word.verbs.form1.imperfect.ana = formData.form1_imperfect_ana;
    word.verbs.form1.imperfect.anta = formData.form1_imperfect_anta;
    word.verbs.form1.imperfect.anti = formData.form1_imperfect_anti;
    word.verbs.form1.imperfect.huwa = formData.form1_imperfect_huwa;
    word.verbs.form1.imperfect.hiya = formData.form1_imperfect_hiya;
    word.verbs.form1.imperfect.antuma_male = formData.form1_imperfect_antuma_male;
    word.verbs.form1.imperfect.antuma_female = formData.form1_imperfect_antuma_female;
    word.verbs.form1.imperfect.huma_male = formData.form1_imperfect_huma_male;
    word.verbs.form1.imperfect.huma_female = formData.form1_imperfect_huma_female;
    word.verbs.form1.imperfect.nahnu = formData.form1_imperfect_nahnu;
    word.verbs.form1.imperfect.antum = formData.form1_imperfect_antum;
    word.verbs.form1.imperfect.antunna = formData.form1_imperfect_antunna;
    word.verbs.form1.imperfect.hum = formData.form1_imperfect_hum;
    word.verbs.form1.imperfect.hunna = formData.form1_imperfect_hunna;
    return word;
}

function mapFormData(word, formData) {
    word.id = formData.id;
    word.word = formData.word;
    word.type = formData.type;
    word.translation = formData.translation;
    word.verbs.form1.perfect.ana = formData.form1_perfect_ana;
    word.verbs.form1.perfect.anta = formData.form1_perfect_anta;
    word.verbs.form1.perfect.anti = formData.form1_perfect_anti;
    word.verbs.form1.perfect.huwa = formData.form1_perfect_huwa;
    word.verbs.form1.perfect.hiya = formData.form1_perfect_hiya;
    word.verbs.form1.perfect.antuma_male = formData.form1_perfect_antuma_male;
    word.verbs.form1.perfect.antuma_female = formData.form1_perfect_antuma_female;
    word.verbs.form1.perfect.huma_male = formData.form1_perfect_huma_male;
    word.verbs.form1.perfect.huma_female = formData.form1_perfect_huma_female;
    word.verbs.form1.perfect.nahnu = formData.form1_perfect_nahnu;
    word.verbs.form1.perfect.antum = formData.form1_perfect_antum;
    word.verbs.form1.perfect.antunna = formData.form1_perfect_antunna;
    word.verbs.form1.perfect.hum = formData.form1_perfect_hum;
    word.verbs.form1.perfect.hunna = formData.form1_perfect_hunna;
    word.verbs.form1.imperfect.ana = formData.form1_imperfect_ana;
    word.verbs.form1.imperfect.anta = formData.form1_imperfect_anta;
    word.verbs.form1.imperfect.anti = formData.form1_imperfect_anti;
    word.verbs.form1.imperfect.huwa = formData.form1_imperfect_huwa;
    word.verbs.form1.imperfect.hiya = formData.form1_imperfect_hiya;
    word.verbs.form1.imperfect.antuma_male = formData.form1_imperfect_antuma_male;
    word.verbs.form1.imperfect.antuma_female = formData.form1_imperfect_antuma_female;
    word.verbs.form1.imperfect.huma_male = formData.form1_imperfect_huma_male;
    word.verbs.form1.imperfect.huma_female = formData.form1_imperfect_huma_female;
    word.verbs.form1.imperfect.nahnu = formData.form1_imperfect_nahnu;
    word.verbs.form1.imperfect.antum = formData.form1_imperfect_antum;
    word.verbs.form1.imperfect.antunna = formData.form1_imperfect_antunna;
    word.verbs.form1.imperfect.hum = formData.form1_imperfect_hum;
    word.verbs.form1.imperfect.hunna = formData.form1_imperfect_hunna;
    return word;
}

function addWord(req, res) {
    let newWord = createNewWordWithFormData(req.body);
    Word.exists( { word : newWord.word }, (err, result) => {
        if(result == true) {
            console.log('The word is already in the dictionary');
            res.render('wordAlreadyExistsResult', { 'q' : newWord.word });
        } else {
            newWord.save((err, savedWord) => {
                if (err) {
                    res.send(err);
                }
                console.log('Word saved to dictionary');
                res.render('newWordResult', savedWord);
            });
        }
    });
}

function findWord(req, res, next) {
    let q = req.query.q;
    Word.find( { word : q }, (err, result) => {
        if(result == false) {
            console.log('Word NOT found in dictionary');
            res.render('wordNotFound', { 'q' : q });
        } else {
            console.log('Word found in dictionary');
            let word = result[0].word;
            let type = result[0].type;
            let translation = result[0].translation;
            let _id = result[0]._id;
            let form1_perfect_ana = result[0].verbs.form1.perfect.ana;
            let form1_perfect_anta = result[0].verbs.form1.perfect.anta;
            res.render('searchResult', {
                'q' : q,
                'word' : word,
                'type' : type,
                'translation' : translation,
                '_id' : _id,
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

function findWordById(req, res) {
    Word.findById(req.params.wordId, (err, result) => {
        res.json(result);
    });
}
// Update is not recommended. Better use SAVE
async function editWord(req, res) {
    let formData = await mapFormData2(req.body);
    Word.updateOne({_id : req.params.wordId}, formData, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            // res.json(result);
            Word.findById(req.params.wordId, (err, result) => {
                res.render('editWordResult', result);
            });
        }
    });
}



module.exports = {
    renderIndex,
    createNewWordWithFormData,
    addWord,
    findWord,
    editWord,
    findWordById
};

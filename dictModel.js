const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const vocabSchema = new Schema({
        id: String,
    	word: String,
    	type: String,
    	translation: String,
    	verbs: {
    		form1: {
    			perfect: {
    				ana: String,
    				anta: String,
    				anti: String,
    				huwa: String,
    				hiya: String,
    				antuma_male: String,
    				antuma_female: String,
    				huma_male: String,
    				huma_female: String,
    				nahnu: String,
    				antum: String,
    				antunna: String,
    				hum: String,
    				hunna: String
    				},
    			imperfect: {
    				ana: String,
    				anta: String,
    				anti: String,
    				huwa: String,
    				hiya: String,
    				antuma_male: String,
    				antuma_female: String,
    				huma_male: String,
    				huma_female: String,
    				nahnu: String,
    				antum: String,
    				antunna: String,
    				hum: String,
    				hunna:String
    				},
    			nouns: [
    				{
    					singular: String,
    					plural: String,
    					translation: String
    				}
    			]
    		}
    	},
    	otherNouns: Array,
    	adverbs: [
    		{
    		  word: String,
    		  translation: String
    		}
    	]
    }

);

vocabSchema.options.toObject = {};
vocabSchema.options.toObject.transform = function (doc, ret, options) {
  // remove the _id of every document before returning the result
  delete ret._id;
  return ret;
};

module.exports = vocabSchema;

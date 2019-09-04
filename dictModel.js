const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const vocabSchema = new Schema({
    	word: String,
    	type: String,
    	translation: String,
    	verbs: {
    		form1: {
    			perfect: {
    				ana: {
    					ar: String,
    					en: String
    					},
    				anta: {
    					ar: String,
    					en: String
    					},
    				anti: {
    					ar: String,
    					en: String
    					},
    				huwa: {
    					ar: String,
    					en: String
    					},
    				heeya: {
    					ar: String,
    					en: String
    					},
    				antumaa_male: {
    					ar: String,
    					en: String
    					},
    				antumaa_female: {
    					ar: String,
    					en: String
    					},
    				humaa_male: {
    					ar: String,
    					en: String
    					},
    				humaa_female: {
    					ar: String,
    					en: String
    					},
    				nahnu: {
    					ar: String,
    					en: String
    					},
    				antum: {
    					ar: String,
    					en: String
    					},
    				antunna: {
    					ar: String,
    					en: String
    					},
    				hum: {
    					ar: String,
    					en: String
    					},
    				hunna:{
    					ar: String,
    					en: String
    					}
    				},
    			imperfect: {
    				ana: {
    					ar: String,
    					en: String
    					},
    				anta: {
    					ar: String,
    					en: String
    					},
    				anti: {
    					ar: String,
    					en: String
    					},
    				huwa: {
    					ar: String,
    					en: String
    					},
    				heeya: {
    					ar: String,
    					en: String
    					},
    				antumaa_male: {
    					ar: String,
    					en: String
    					},
    				antumaa_female: {
    					ar: String,
    					en: String
    					},
    				humaa_male: {
    					ar: String,
    					en: String
    					},
    				humaa_female: {
    					ar: String,
    					en: String
    					},
    				nahnu: {
    					ar: String,
    					en: String
    					},
    				antum: {
    					ar: String,
    					en: String
    					},
    				antunna: {
    					ar: String,
    					en: String
    					},
    				hum: {
    					ar: String,
    					en: String
    					},
    				hunna:{
    					ar: String,
    					en: String
    					}
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

module.exports = vocabSchema;

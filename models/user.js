const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    name : {
        type:String
    },
    email : {
        type : String
    },
    subject : {
        type : String
    },
    message : {
        type : String
    }
});

module.exports = mongoose.model('User',userSchema, 'FeedbackDetails');


//var dataSchema = new Schema({..}, { collection: 'data' })., The third parameter is the name of collection, first parameter is schemaname

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Messages = new Schema({
    _id: Number,
    message: String
});

exports.Message = mongoose.model('Message',Messages);
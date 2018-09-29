let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Messages = new Schema({
    message: String
});

exports.Message = mongoose.model('Message',Messages);
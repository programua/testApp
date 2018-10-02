let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Messages = new Schema({
    _id: Schema.Types.ObjectId,
    message: String,
    unit : { type:Schema.Types.ObjectId, ref:'User' }
});

exports.Message = mongoose.model('Message',Messages);
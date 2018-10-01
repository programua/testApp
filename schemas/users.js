let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Users = new Schema({
    _id: Schema.Types.ObjectId,
    userName: String,
    message: { type:String, ref:'Message' },
});

exports.User = mongoose.model('User',Users);
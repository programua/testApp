let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Users = new Schema({
    _id: Number,
    userName: String
});

exports.User = mongoose.model('User',Users);
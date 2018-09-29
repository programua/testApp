let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Users = new Schema({
    userName: String
});

exports.User = mongoose.model('User',Users);
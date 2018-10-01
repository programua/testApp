'use strict';

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let userModel = require('../schemas/users').User;
let messageModel = require('../schemas/messages').Message;

// messsageとuserデータをdbに登録
router.post('/',function(req, res){
    console.log(req);
    let User = new userModel({
        _id: new mongoose.Types.ObjectId(),
        userName: req.body.name,
    });
    let Message = new messageModel({
        _id: new mongoose.Types.ObjectId(),
        message: req.body.text,
        userName: User.userName,
        unit: User._id
    });

    User.save(function(err){
        if(err) throw err;
        Message.save(function(err){
            if(err) throw err;
        });
    });

    res.redirect('/');
});

module.exports = router;
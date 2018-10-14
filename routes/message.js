'use strict';

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let userModel = require('../schemas/users').User;
let messageModel = require('../schemas/messages').Message;

// messsageとuserデータをdbに登録
router.post('/regist',function(req, res){
    let User = new userModel({
        _id: new mongoose.Types.ObjectId(),
        userName: req.body.name,
    });
    // unitカラムでUserモデルと紐づけないとfind時に
    // populateできないので注意
    let Message = new messageModel({
        _id: new mongoose.Types.ObjectId(),
        message: req.body.text,
        unit: User._id
    });

    // User登録＆Message登録
    // 二つのコレクションをidで結合
    User.save(function(err){
        if(err) throw err;
        Message.save(function(err){
            if(err) throw err;
        });
    });

    res.redirect('/');
});

router.post('/getList',function(req, res){
    (function(){
        messageModel.find({},{limit:5})
        .populate('unit')
        .exec(function(err, result){
            console.log(result);
            res.json(result);
        })
    })();  
});

module.exports = router;
'use strict';

let express = require('express');
let router = express.Router();
let userModel = require('../schemas/users').User;
let messageModel = require('../schemas/messages').Message;

router.post('/',function(req, res){
    let user = new userModel({
        userName: req.body.name
    });
    let message = new messageModel({
        message: req.body.message
    });

    user.save(function(err){
        if(err) throw err;
    });
    message.save(function(err){
        if(err) throw err;
    });
    res.redirect('/');
});

module.exports = router;
'use strict';

let express = require('express');
let router = express.Router();
let fs = require('fs');
let multer = require('multer');

let storage = multer.diskStrage({
    destination: function(req, file, callback){
        callback(null,'')
    },
});

router.post('/', function (req, res) {
    

});

module.exports = router;

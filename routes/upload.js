'use strict';

let express = require('express');
let router = express.Router();
let multer = require('multer');

let storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, '/files/images')
    },
    filename: function(req, file, callback){
        callback(null, file.originalname)
    }
});
let upload = multer({ storage: storage }).single('gafile');

router.post('/', upload.single('image'), function (req, res) {
    res.json({ 'result': 'upload success!' });
});

module.exports = router;

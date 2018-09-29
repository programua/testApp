'use strict';

let express = require('express');
let router = express.Router();
let multer = require('multer');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));
router.use(cookieParser);

let storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, '../files/images/')
    },
    filename: function(req, file, callback){
        callback(null, file.originalname)
    }
});
let upload = multer({ storage: storage });

router.post('/', upload.single('testImage'), function (req, res) {
    res.render('upload');
});

router.post('/sendImage', upload.single('testImage'), function (req, res) {
    res.json({ 'result': 'upload success!' });
});
module.exports = router;

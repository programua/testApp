let express = require('express');
let router = express.Router();
let userModel = require('../schemas/users').User;
let messageModel = require('../schemas/messages').Message;

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index');
});

module.exports = router;

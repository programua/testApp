let express = require('express');
let router = express.Router();
let userModel = require('../schemas/users').User;
let messageModel = require('../schemas/messages').Message;

/* GET home page. */
router.get('/', function(req, res, next) {
  findArticles(function(data){
    console.log(data);
    res.render('index', { data: data });
  });
});

let findArticles = function(callback){
  messageModel.find({},{limit:5})
  .populate('unit')
    .exec(function(err, result){
      callback(result);
    })
};

module.exports = router;

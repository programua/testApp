let express = require('express');
let router = express.Router();
let userModel = require('../schemas/users').User;
let messageModel = require('../schemas/messages').Message;

/* GET home page. */
router.get('/', function(req, res, next) {
findArticles();
  res.render('index', { title: 'Express' });
});

let findArticles = function(){
  messageModel.find({},{limit:5})
    .populate('unit')
    .exec(function(err, data){
      console.log(data);
    })
};

module.exports = router;

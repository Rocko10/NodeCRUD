var express = require('express');
var router = express.Router();
var userModel = require('./../models/user.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  userModel.find(function(err, users){
      if(err){
          console.log(err);
          res.send([]);
      }
      else{
          res.send(users);
      }
  });
});

router.post('/new', function(req, res, next){
    var user = req.body;
    userModel.create(user, function(err){
        if(err){
            console.log(err);
            return 0;
        }
        else{
            return 1;
        }
    });
});

module.exports = router;

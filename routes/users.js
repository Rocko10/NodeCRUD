var express = require('express');
var router = express.Router();
var userModel = require('./../models/user.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  userModel.find(function(err, users){
      if(err){
          res.send(err);
      }
      else{
          res.send(users);
      }
  });
});

module.exports = router;

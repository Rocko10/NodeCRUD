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

router.get('/:id', function(req, res, next){
    var id = req.params.id;
    userModel.find({'_id': id}, function(err, user){
        if(err){
            console.log(err);
            res.send({
                status: 0
            });
        }
        else{
            res.send(user[0]);
        }
    });
});

router.delete('/delete/:id', function(req, res, next){
    var id = req.params.id;
    userModel.remove({'_id': id}, function(err){
        if(err){
            console.log(err);
            res.send({
                status: 0,
                msg: err
            });
        }
        else{
            res.send({
                status: 1
            });
        }
    });
});

router.post('/new', function(req, res, next){
    var user = req.body;
    userModel.create(user, function(err, user){
        if(err){
            console.log(err);
            res.send({
                status: 0,
                'msg': err
            });
        }
        else{
            res.send({
                'status': 1,
                'msg': user
            });
        }
    });
});

router.patch('/:id', function(req, res, data){
    var id = req.params.id;
    var data = req.body;
    userModel.findOneAndUpdate({
        '_id': id
    }, data, function(err){
        if(err){
            console.log(err);
            res.send({
                status: 0,
                msg: err
            });
        }
        else{
            res.send({
                status: 1
            });
        }
    });
});

module.exports = router;

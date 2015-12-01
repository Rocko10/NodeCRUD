var express = require('express');
var router = express.Router();
var userModel = require('./../models/user.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Inicio' });
});

router.get('/lista', function(req, res, next){
    res.render('users/index', {
        title: 'Lista'
    });
});
router.get('/crear-usuario', function(req, res, next){
    res.render('users/new', {
        title: 'Crear usuario'
    });
});

router.get('/actualizar-usuario/:id', function(req, res, next){
    var id = req.params.id;
    userModel.findById(id, function(err, user){
        if(err){
            console.log(err);
            res.redirect().back();
        }
        else{
            res.render('users/update', {
                title: 'Actualizar',
                user: user
            });
        }
    });
});

module.exports = router;

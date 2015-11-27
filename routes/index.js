var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Inicio' });
});

router.get('/lista', function(req, res, next){
    res.render('users/index', {
        title: 'Lista'
    });
});

module.exports = router;

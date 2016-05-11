var express = require('express');
var router = express.Router();
var user = require('../models/user.js');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:id', function (req,res,next) {
    user.findById(res,req.params.id);
});
module.exports = router;

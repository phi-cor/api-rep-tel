var express = require('express');
var router = express.Router();
var contactController= require('../controllers/contact-controller');
var bodyParser = require('body-parser')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).send({register:contactController.get})
});
router.post('/new',bodyParser.json, function(req, res, next) {
  let data=req.bodyParser;
  console.log(data);
  res.status(204).send({toto:"ba"})
});

module.exports = router;
/**
 * 
 */
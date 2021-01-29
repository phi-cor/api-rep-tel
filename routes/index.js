var express = require('express');
var router = express.Router();
var contactController= require('../controllers/contact-controller');
var bodyParser = require('body-parser');

/* GET home page. */
router.get('/contacts', function(req, res, next) {
  res.status(200).send({register:contactController.get})
});
router.post('/contacts/new', function(req, res, next) {
  contactController.new(req.body);
  console.log(contactController.get);
  res.status(204).send();
});
router.delete('/contact/:id', function(req, res, next) {
  contactController.del(req.params.id);
  console.log(contactController.get);
  res.status(202).send();
});
router.put('/contact/:id', function(req, res, next) {
  contactController.update(req.params.id,req.body);
  console.log(contactController.get);
  res.status(200).send();
});

module.exports = router;
/**
 * 
 */
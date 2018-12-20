var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {page:'Home', menuId:'home'});
});


router.get('/about', function(req, res, next) {
  res.render('about', {page:'About', menuId:'about'});
});

router.get('/contact', function(req, res, next) {
  res.render('contact', {page:'Contact Us', menuId:'contact'});
});

router.get('/solution', function(req, res, next) {
  res.render('solution', {page:'Our Solutions', menuId:'solution'});
});
router.get('/technology', function(req, res, next) {
  res.render('technology', {page:'Our Technology', menuId:'technology'});
});
router.get('/client', function(req, res, next) {
  res.render('client', {page:'Client', menuId:'client'});
});
router.get('/case', function(req, res, next) {
  res.render('case', {page:'Case Study', menuId:'case'});
});
module.exports = router;

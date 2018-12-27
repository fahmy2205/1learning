var express = require('express');
var router = express.Router();

// Configuring the database
//const dbConfig = require('./database.js');

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect('mongodb://admin:adminpwd@localhost:27017/admin', {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {page:'Home', menuId:'home'});
});


router.get('/about', function(req, res, next) {

  var testSchema = new mongoose.Schema({
    title: String,
    content: String,
    img: String
});

var Test = mongoose.model('Konten', testSchema);

    Test.find({},function(err, docs){
     //       res.send('index',{docs:docs});
    res.render('about', {page:'About', menuId:'about',docs:docs});
});

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

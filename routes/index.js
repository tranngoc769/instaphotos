var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("index");
});
// GET 
router.get('/about', function(req, res, next) {
  res.render("about");
});

// GET 
router.get('/blog', function(req, res, next) {
  res.render("blog");
});

// GET 
router.get('/contact', function(req, res, next) {
  res.render("contact");
});
// GET 
router.get('/services', function(req, res, next) {
  res.render("services");
});

// GET 
router.get('/single', function(req, res, next) {
  res.render("single");
});

// GET 
router.get('/collection', function(req, res, next) {
  res.render("collection");
});

module.exports = router;

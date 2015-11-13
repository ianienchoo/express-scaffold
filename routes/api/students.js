var express = require('express');
var router = express.Router();
var Student = require('../models/student');

// INDEX
router.get('/', function(req, res, next) {
  Student.find({}, function(err, studentList) {
    res.json(studentList);
  })
});

module.exports = router;

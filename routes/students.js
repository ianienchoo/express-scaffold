var express = require('express');
var router = express.Router();
var Student = require('../models/student');

// INDEX + NEW
router.get('/', function(req, res, next) {
  Student.find({}, function(err, studentList) {
    res.render('students/index', {students: studentList})
  })
});

// CREATE
router.post('/', function(req, res, next) {
  var newStudent = new Student(req.body.student);
  newStudent.save(function(err) {
    res.redirect('/students')
  });
});

// SHOW

// UPDATE
router.post('/:id/update', function(req, res, next) {
  Student.findByIdAndUpdate(req.params.id, req.body.student, function(err){
    res.redirect('/students')
  });
});

// DELETE
router.get('/:id/delete', function(req, res, next) {
  Student.findByIdAndRemove(req.params.id, function(err){
    res.redirect('/students')
  });
});

// EDIT
router.get('/:id/edit', function(req, res, next) {
  Student.findById(req.params.id, function(err, studentFound) {
    res.render('students/edit', {student: studentFound});
  })
});

module.exports = router;

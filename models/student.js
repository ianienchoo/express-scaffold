var mongoose = require('mongoose');

var StudentSchema = new mongoose.Schema({
  name:    String,
  school:  String,
  dob:     Date,
  gender:  { type: String , enum: ["M", "F"]},
  tuition: { type: Number }
});

// StudentSchema.methods.age = function() {};

var Student = mongoose.model('Student', StudentSchema);

module.exports = Student;

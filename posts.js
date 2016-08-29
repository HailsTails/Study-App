var mongoose = require('mongoose');
var Users_Schema = new mongoose.Schema({
  fname: String,
  lName: String,
  email: mongoose.SchemaTypes.Email,
  
})

Users_Schema

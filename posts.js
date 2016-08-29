var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    autoIncrement = require('mongoose-auto-increment'),
    dbConnection = mongoose.createConnection("mongodb://LocalHost/StudyDB");

require('mongoose-type-email');

autoIncrement.initialize(dbConnection);

var Users_Schema = new Schema({
  firstName: String,
  lastName: String,
  email: {type: Schema.Types.Email, required: true},
  password:
})

Users_Schema.plugin(autoIncrement.plugin, {model: 'Users', field: 'userID'});
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require(bcrypt),
    autoIncrement = require('mongoose-auto-increment'),
    dbConnection = mongoose.createConnection("mongodb://LocalHost/StudyDB");

require('mongoose-type-email');

autoIncrement.initialize(dbConnection);

var Users_Schema = new Schema({
  firstName: String,
  lastName: String,
  email: {type: Schema.Types.Email, required: true},
  password: {type: String, required: true}
});

Users_Schema.plugin(autoIncrement.plugin, {model: 'Users', field: 'userID'});

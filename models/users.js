require('db');

var Users_Schema = new Schema({
  firstName: String,
  lastName: String,
  email: {type: Schema.Types.Email, required: true},
  password: {type: String, required: true}
});

Users_Schema.plugin(autoIncrement.plugin, {model: 'User', field: 'userID'});

var User = db.model('User', Users_Schema);

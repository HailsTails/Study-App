require('db');

var Users_Schema = new Schema({
  firstName: String,
  lastName: String,
  email: {type: Schema.Types.Email, required: true},
  password: {type: String, required: true},
  google_id: Integer
});

var Tasks_Schema = new Schema({
  title: String,
  done: Boolean,
  due_date: Date
  comments: [{type: Schema.Types.ObjectId, ref: 'Sub_Tasks'}]
});

mongoose.model('Task', Tasks_Schema);

var Sub_Tasks_Schema = new Schema({
  title: String,
  done: Boolean,
  task: {type: Schema.Types.ObjectID, ref: Tasks}
});

Tasks_Schema.methods.tickOff = function(cb){
  if(this.done == true){
    this.done = false;
  }
  else if(this.done = false){
    this.done = true;
  }
  this.save(cb);
}

Sub_Tasks_Schema.methods.tickOff = function(cb){
  if(this.done == true){
    this.done = false;
  }
  else if(this.done = false){
    this.done = true;
  }
  this.save(cb);
}

mongoose.model('Sub_Tasks', Sub_Tasks_Schema)

Users_Schema.plugin(autoIncrement.plugin, {model: 'User', field: 'userID'});

var User = db.model('User', Users_Schema);

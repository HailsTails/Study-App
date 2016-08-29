require('mongoose-type-email');
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require('bcryptjs'),
    autoIncrement = require('mongoose-auto-increment'),
    db = mongoose.createConnection("mongodb://LocalHost/StudyDB");

// db connection error handling
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){});

autoIncrement.initialize(db);

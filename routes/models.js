var mongoose = require("mongoose");

mongoose.connect(process.env.MONGOLAB_URI || 'localhost');

var twitSchema = mongoose.Schema({
	'text' : String, 
	'username' : String,
	'date' : Date
});

var userSchema = mongoose.Schema({
	'username' : String
});

var Twit = mongoose.model('Twit', twitSchema);
var User = mongoose.model('User', userSchema);

exports.User = User;
exports.Twit = Twit;
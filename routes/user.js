var models = require("./models");

exports.nu = function(req, res){
  res.render('newuser', {title: 'New User'});
};

exports.create = function(req, res){
	var data = req.body.username;


	models.User.findOne({username : data},function(err, user) {
		if (err) return console.log('error', err);
		if (user) {
			req.session.username = user.username;
			console.log(user.username);
			res.redirect('/');
		}
		else {
			var newuser = new models.User({username: data});
			newuser.save(function(err){
				console.log('saving new user');
				if(err) {return console.log('error', err); res.send("ERROR SAVING!");}
				req.session.username = newuser.username;
				console.log(data);
				res.redirect('/');
			});
		}
	});
	
	
	
	
}
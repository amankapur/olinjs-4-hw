var models = require('./models');

exports.create = function(req, res){
	console.log('new twit');
	console.log(req.session.username);
	//console.log(req.body.twit);
	var newtwit = new models.Twit({username: req.session.username, text: req.body.twit, date: Date.now()});
			newtwit.save(function(err){
				console.log('saving new twit');
				if(err) return console.log('error', err);

			});
};

exports.list = function(req, res){
	models.Twit.find().sort({'date' : 'descending'}).exec(function(err, data){
		if(err) {console.log(err); res.send("ERROR, can't find twits"); return;}
		//console.log(data);	
		res.render('_twits', { title: req.session.username || 'wtf', twits: data });
	});
}
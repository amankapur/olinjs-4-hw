var models = require('./models');

exports.index = function(req, res){
	models.Twit.find().sort({'date' : 'descending'}).exec(function(err, data){
		if(err) {console.log(err); res.send("ERROR, can't find twits"); return;}
		//console.log(data);	
		res.render('index', { title: req.session.username || 'wtf', twits: data });
	});
};
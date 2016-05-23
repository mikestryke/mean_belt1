var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = (function() {
	return {
		showUser: function(req, res){
			User.findOne({}, {}, { sort: { 'date' : -1 } }, function(err, user){
				if(err){
					console.log(err);

				} else{
					console.log(user)
					console.log("Inside back end controller")
					res.json(user);
				}
			})
		}, 
		createUser: function(req, res){
			var new_user = new User(req.body);
			new_user.save(function(err, user){
				if(err){
					res.json({message: "Your fields are blank!", error: "Name cannot be blank! Name must be at least 3 characters and greater than 15!"})
				} else {
					console.log("Something")
					res.json(new_user)
				}
			})
		}
		// deleteCustomer: function(req, res){
		// 	Customer.remove({_id: req.params.id}, function(err, customer){
		// 		if(err){
		// 			console.log(err)
		// 			console.log("There is an area in deleteCustomer in the back end controller!")
		// 		} else{
		// 			res.json(customer);
		// 		}
		// 	})
		// }
	}
})();














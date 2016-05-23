var mongoose = require('mongoose');
var Product = mongoose.model('Product');

module.exports = (function() {
	return {
		showProducts: function(req, res){
			Product.find({}, function(err, product){
				if(err){
					console.log(err);

				} else{
					console.log(product)
					console.log("Inside back end controller")
					res.json(product);
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
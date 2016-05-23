var mongoose = require('mongoose');
var Bid = mongoose.model('Bid');

module.exports = (function() {
	return {
		showBids: function(req, res){
			Bid.find({}, function(err, bid){
				if(err){
					console.log(err);

				} else{
					console.log(bid)
					console.log("Inside back end controller")
					res.json(bid);
				}
			})
		},
		createBid: function(req, res){
			var new_bid = new Bid(req.body)
			new_bid.save(function(err, bid){
				if(err){
					console.log(err)
					res.json({message: "Toasty", error:"All fields must be filled out and bid amount must be higher than last!"})
				} else {
					res.json(new_bid)
				}
			})
		},
		getHighestBid: function(req, res){
			Bid.find({}).sort({amount: 'desc'}).exec(function(err, bid){
				if(err){
					console.log(err);
				} else{
					res.json(bid);
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
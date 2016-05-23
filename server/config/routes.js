var users = require('./../controllers/users.js')
var products = require('./../controllers/products.js')
var bids = require('./../controllers/bids.js')
// var orders = require('./../controllers/orders.js')
// var products = require('./../controllers/products.js')

module.exports = function(app){
	app.get('/users', function(req, res){
		users.showUser(req, res);
	});
	app.post('/users', function(req, res){
		users.createUser(req, res);
	});
	app.get('/products', function(req, res){
		products.showProducts(req, res);
	})
	app.post('/bids', function(req, res){
		bids.createBid(req, res);
	})
	app.get('/bids', function(req, res){
		bids.showBids(req, res);
	})
	app.get('/getHighestBid', function(req, res){
		bids.getHighestBid(req, res);
	})

	// app.post('/users/:id/delete', function(req, res){
	// 	users.deleteCustomer(req, res);
	// })
	// app.get('/orders', function(req, res){
	// 	orders.showOrder(req, res);
	// })
	// app.post('/orders', function(req, res){
	// 	orders.createOrder(req, res);
	// })
	// app.get('/products', function(req, res){
	// 	products.showProducts(req, res);
	// })
	// app.post('/products', function(req, res){
	// 	products.createProduct(req, res);
	// })
}
myApp.factory('productFactory', function($http){
	var factory = {};
	var products = [];

	factory.getProduct = function(callback){
		$http.get('/products').then(function(data){
			products = data.data;
			console.log(products)
			callback(data.data);
			console.log(data.data)
			console.log("Inside factory getTopic")
		})
	}

	return factory;
})
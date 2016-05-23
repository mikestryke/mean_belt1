myApp.factory('bidFactory', function($http){
	var factory = {};
	var bids = [];

	factory.getBid = function(callback){
		$http.get('/bids').then(function(data){
			bids = data.data;
			console.log(bids)
			callback(data.data);
			console.log(data.data)
			console.log("Inside factory getBid")
		})
	}
	factory.addBid = function(info, callback){
		$http.post('/bids', info).then(function(data){
			bids.push(data.data)
			callback(bids)
		})
	}
	factory.getHighestBid = function(callback){
		$http.get('/getHighestBid').then(function(data){
			bids = data.data;
			console.log(bids)
			callback(data.data);
			console.log(data.data)
			console.log("Inside factory getBid")
		})
	}
	
	return factory;
})


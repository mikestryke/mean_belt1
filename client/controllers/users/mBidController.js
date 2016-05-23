myApp.controller('mBidController', function($scope, $routeParams, $location, userFactory, productFactory, bidFactory){
	$scope.new_bid = {};

	productFactory.getProduct(function(data){
		$scope.products= data;
		console.log(data);
		console.log("From Dashboard controller at Front end");
	})
	bidFactory.getBid(function(data){
		$scope.bids = data;
	})
	$scope.addBid = function(){
		bidFactory.addBid($scope.new_bid, function(data){
			$scope.bids = data;
			console.log(data)
		})
	}


})


	
	$scope.addUser = function(){
		userFactory.addUser($scope.new_user, function(data){
			if(data.error){
				console.log(data.error)
				console.log("There should be an error message above")
				$scope.error = data.error
			} else{
				$location.path('/bid')
				console.log(data)
				console.log("Inside index controller Front end")
			}
		})
	}
 
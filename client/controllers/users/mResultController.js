myApp.controller('mResultController', function($scope, $routeParams, $location, userFactory, bidFactory){
	userFactory.getUser(function(data){
		$scope.user = data;
	})
	bidFactory.getHighestBid(function(data){
		$scope.bids = data;
	})
})
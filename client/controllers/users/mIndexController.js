myApp.controller('mIndexController', function($scope, $routeParams, $location, userFactory){
	
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
	// $scope.removeCustomer = function(customer){
	// 	customerFactory.removeCustomer(customer, function(data){
	// 		$scope.customers = data;
	// 		console.log(data);
	// 	})
	// }
})
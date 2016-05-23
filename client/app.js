var myApp = angular.module('Myapp', ['ngRoute']);

(function(){
	myApp.config(function($routeProvider){
		$routeProvider
			.when('/', 
			{
				controller: 'mIndexController',
				templateUrl: "partials/users/index.html"
			})
			.when('/bid',
			{
				controller: 'mBidController',
				templateUrl: "partials/users/bid.html"
			})
			.when('/result',
			{
				controller: 'mResultController',
				templateUrl: 'partials/users/result.html'
			})
			.otherwise({
				redirectTo: "/"
			})
	})
}());
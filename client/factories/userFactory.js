myApp.factory('userFactory', function($http){
	var factory = {};
	var users = [];
	var user = []

	factory.getUser = function(callback){
		$http.get('/users').then(function(data){
			user = data.data;
			console.log(user, "Can you see the last user?")
			callback(data.data);
			console.log(data.data)
			console.log("Inside factory getUser")
		})
	}
	factory.addUser = function(info, callback){
		$http.post('/users', info).then(function(data){
			if(data.data.error){
				callback(data.data);
			} else{
				users.push(data.data)
				callback(users);
			}
		})
	}
	// factory.removeCustomer = function(customer, callback){
	// 	console.log("Inside removeCustomer in Factory", customer)
	// 	$http.post('/customers/' + customer._id + '/delete').then(function(data){
	// 		customers.splice(customers.indexOf(customer), 1);
	// 		callback(customers);
	// 	})
	// }
	return factory;
})
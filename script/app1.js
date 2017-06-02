var app= angular.module('myApp', ['ngRoute']);

app.config(['$locationProvider',function($locationProvider) {
	$locationProvider.hashPrefix('')
}])
app.config(['$routeProvider',function($routeProvider) {

	$routeProvider
			.when('/',{

				templateUrl: "home.html",
				controller: 'myHomeController',
				caseInsensitiveMatch: true

			})
			.when('/register',{
				templateUrl: "register.html",
				controller: 'myRegController',
				caseInsensitiveMatch: true		
				
			})
			.when('/login',{
				templateUrl:"login.html",
				controller: 'myLoginController',
				caseInsensitiveMatch: true
			})
	
}])

app.controller('myHomeController', ['$scope', function($scope){
			$scope.ID="This is the id =";
	
}])
app.controller('myRegController', ['$scope','$http','$location', function($scope,$http,$location){
			$scope.createRegister = function(){

		$http.post('/createRegister', $scope.register)
					.then(function(response){
						console.log(response.data)
						$scope.register={};

						$location.path('/login')

						//refresh();
					})
	}
}])

app.controller('myLoginController', ['$scope', function($scope){
			$scope.UserName="This is the username=";
			$scope.Pass="This is the password=";
}])
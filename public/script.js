var myApp = angular.module('myApp', ['ngRoute']);


// configure our routes
myApp.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        })

        // route for the about page
        .when('/signup', {
            templateUrl : 'pages/signup.html',
            controller  : 'signupController'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl : 'pages/contact.html',
            controller  : 'contactController'
        })

        .when('/availability', {

            templateUrl: 'pages/availability.html',
            controller: 'availabilityController'
        })

        .when('/stats', {

            templateUrl: 'pages/stats.html',
            controller: "statsController"
        })

        .when('/gallery', {

            templateUrl: 'pages/gallery.html',
            controller: "galleryController"
        })

        .when('/league', {

            templateUrl: 'pages/league.html',
            controller: "leagueController"
        });
    });


// create the controller and inject Angular's $scope
myApp.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

myApp.controller('leagueController', function($scope) {
    $scope.message = 'Look! I am the league page.';
});

myApp.controller('contactController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});

myApp.controller('galleryController', function($scope) {
    $scope.message = 'Look how shit we are at football!';
});

myApp.controller('statsController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});



myApp.controller('signupController', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");

	var refresh = function(){
	    $http.get('/userlist').success(function(response) {

	    	console.log("data received from request");
	    	$scope.userlist = response;
	    	$scope.user = "";

	    });
	};

    //refresh function that gets data from /userlist route via http request and binds it to scope 
    //variable as userlist. It also refreshes the forms to blank

    refresh();

    //call refresh function

    $scope.addUser = function() {

    	console.log($scope.user);

    	$http.post('/userlist', $scope.user).success(function(response){

    		console.log(response);
    		refresh();
    	});
    };

    // Binds user object to scope and posts to /userlist route and then refreshes page


    $scope.remove = function(id) {

    	console.log(id);
    	$http.delete('/userlist/'+ id).success(function(response) {

    		refresh();
    	});

    };

    $scope.edit = function(id) {

    	console.log(id);
    	$http.get('/userlist/' + id).success(function(response) {
    		$scope.user = response;

    	});


     };

    $scope.update = function() {

    	console.log($scope.user._id);
    	$http.put('/userlist/'+$scope.user._id, $scope.user).success(function(response) {

    		refresh();


    	})

    };

    $scope.deselect = function() {

    	$scope.user = "";
    }




}]);


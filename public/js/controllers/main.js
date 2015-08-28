var myApp = angular.module('myApp', ['ngRoute', 'ui.bootstrap']);


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
            templateUrl : 'pages/signup2.html',
            controller  : 'modalSignup'
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
        })


        .when('/availability', {

            templateUrl: 'pages/availability.html',
            controller: "availabilityController"


        })

        .when('/signup2', {

            templateUrl: 'pages/signup.html',
            controller: "signupController"

        });


    });


// create the controller and inject Angular's $scope
myApp.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = "'We love bad pitches that's our fkin problem'";
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

myApp.controller('availabilityController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});


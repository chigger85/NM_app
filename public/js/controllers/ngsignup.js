var myApp = angular.module('myApp');


myApp.controller('signupController', ['$scope', '$http', function($scope, $http) {
   
    console.log("Hello World from controller");

    var refresh = function(){
        $http.get('/player').success(function(response) {

            console.log("data received from request");
            $scope.player = response;
            $scope.user = "";

        });
    };

    //refresh function that gets data from /userlist route via http request and binds it to scope 
    //variable as userlist. It also refreshes the forms to blank

    refresh();

    //call refresh function

    $scope.addUser = function() {

        console.log($scope.user);

        $http.post('/player', $scope.user).success(function(response){

            console.log(response);
            refresh();
        });
    };

    // Binds user object to scope and posts to /userlist route and then refreshes page


    $scope.remove = function(id) {

        console.log(id);
        $http.delete('/player/'+ id).success(function(response) {

            refresh();
        });

    };

    $scope.edit = function(id) {

        console.log(id);
        $http.get('/player/' + id).success(function(response) {
            $scope.user = response;

        });


     };

    $scope.update = function() {

        console.log($scope.user._id);
        $http.put('/player/'+$scope.user._id, $scope.user).success(function(response) {

            refresh();


        })

    };

    $scope.deselect = function() {

        $scope.user = "";
    }


}]);


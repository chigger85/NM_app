var myApp = angular.module('myApp');

myApp.controller('modalSignup', ["$scope", "$modal", "$log","$http",  function ($scope, $modal, $log, $http) {

  $scope.messages = ["You're on the books - now go and do some fitness", "Details Updated - sometimes I think about death and I get scared"];
  $scope.animationsEnabled = true;

  var refresh = function(){
        $http.get('/player').success(function(response) {

            console.log("data received from request");
            $scope.player = response;
            $scope.user = "";

        });
    };

    refresh();


  $scope.remove = function(id) {

        console.log(id);
        $http.delete('/player/'+ id).success(function(response) {

            
        });

        refresh();  

    };


  $scope.edit = function(id) {

        console.log(id);
        $http.get('/player/' + id).success(function(response) {
            $scope.user = response;



        });

     };

  $scope.open_submit = function (size) {

    var modalInstance = $modal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'modalSubmitPlayer.html',
      controller: 'modalSubmitPlayer',
      scope: $scope,
      size: size,
      resolve: {

          messages: function () {
          return $scope.messages;
        }
      }
      
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });

  };

    $scope.open_edit = function (size) {

    var modalInstance = $modal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'modalEditPlayer.html',
      controller: 'modalEditPlayer',
      scope: $scope,
      size: size,
      resolve: {

          messages: function () {
          return $scope.messages;
        }
      }
      
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });

  };




}]);

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

myApp.controller('modalSubmitPlayer', ["$scope", "$modalInstance", "$http", "$timeout", "$route", "messages",  function($scope, $modalInstance, $http, $timeout, $route, messages) {

    $scope.messages = messages;


    $scope.selected = {

      message: $scope.messages[0]
    };

    $scope.ok = function () { 
      $modalInstance.close($scope.selected.message);  
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');

    };


    $scope.addUser = function() {

        console.log($scope.user);
        console.log($scope.added);

        $http.post('/player', $scope.user).success(function(response){

            console.log(response);
            $modalInstance.close(); 


            $timeout(function(){
            $route.reload();
              
            }, 2000);

        });
    
      };



    $scope.deselect = function() {

        $scope.user = "";
    }

}]);



myApp.controller('modalEditPlayer', ["$scope", "$modalInstance", "$http", "$timeout", "$route", "messages",  function($scope, $modalInstance, $http, $timeout, $route, messages) {

    $scope.messages = messages;

    $scope.selected = {

      message: $scope.messages[0]
    };

    $scope.ok = function () { 
      $modalInstance.close($scope.selected.message);  
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');

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

          
        console.log(response);
            $modalInstance.close(); 


            $timeout(function(){
            $route.reload();
              
            }, 2000);

        });
    

    };

    $scope.deselect = function() {

        $scope.user = "";
    }

}]);



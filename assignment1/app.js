(function() {
'use strict';
angular.module('LunchCheck',[]).controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope){
  $scope.dishes="";
  $scope.tooMuch = function(arrayOfStrings){
    var arrayOfStrings = "";
    arrayOfStrings = $scope.dishes.split(',');
    if($scope.dishes == ""){
      $scope.message = "Please enter data first";
    }
    else if(arrayOfStrings.length <=3){
      $scope.message="Enjoy";
    }
    else {
      $scope.message="Too much!";
    }
  }

};

})();

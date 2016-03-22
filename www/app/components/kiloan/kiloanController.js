angular.module('starter.controllers')

.controller('kiloanController', function($scope,kiloanServices) {
  $scope.items = kiloanServices.getData();
  $scope.formData = {};
  $scope.kiloanAdd = function(){
    var item = {
      "type" : $scope.formData.type,
      "qty" : $scope.formData.qty
    };
    kiloanServices.pushData(item);
  }
  $scope.removeItem = function(index){
    $scope.items.splice(index, 1);
  }
});
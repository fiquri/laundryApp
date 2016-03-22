angular.module('starter.controllers')

.controller('historyController', function($scope,kiloanServices) {
  $scope.items = kiloanServices.getData();
  $scope.histories = [
    {
      "id" : 1,
      "banner" : "img1.jpg",
      "title" : "History 1",
      "transaksi" : "1234"
    },
    {
      "id" : 2,
      "banner" : "img2.jpg",
      "title" : "History 2",
      "transaksi" : "2234"
    },
    {
      "id" : 3,
      "banner" : "img3.jpg",
      "title" : "History 3",
      "transaksi" : "3334"
    },
    {
      "id" : 4,
      "banner" : "img4.jpg",
      "title" : "History 14",
      "transaksi" : "4434"
    }
  ];
});
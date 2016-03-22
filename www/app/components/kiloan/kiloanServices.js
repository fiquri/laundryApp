angular.module('starter.controllers')
.factory('kiloanServices', function () {
	var service={};
  	var items = [];

	service.pushData = function (item){
	     items.push(item);
	};

	service.getData = function () {
		return items;
	}
	return service;
});
angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $ionicPopover, $timeout, $state) {
    // // .fromTemplateUrl() method
    $ionicPopover.fromTemplateUrl('app/templates/outlet-info.html', {
      scope: $scope
    }).then(function(popover) {
      $scope.popover = popover;
    });


    $scope.mapClick = function($event) {
      $scope.popover.show($event);
    };
    $scope.closePopover = function() {
      $scope.popover.hide();
    };
    //Cleanup the popover when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.popover.remove();
    });
    // Execute action on hide popover
    $scope.$on('popover.hidden', function() {
      // Execute action
    });
    // Execute action on remove popover
    $scope.$on('popover.removed', function() {
      // Execute action
    });
    
    $ionicModal.fromTemplateUrl('app/components/kiloan/kiloan-add.html', {
      scope: $scope
      }).then(function(modal) {
        $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.kiloanClose = function() {
      $scope.modal.hide();
    };


    // Open the login modal
    $scope.kiloanAdd = function() {
      $scope.modal.show();
    };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})
.controller('testCrtl', function($scope, $rootScope, $timeout) {
$scope.none = function () {
    $timeout(function() {
      var el = document.querySelector(".ek-single");
      el.classList.add("none");
    }, 300);
  };
})
.controller('HistoryCtrl', function($scope, $rootScope) {
  $scope.id= $rootScope.$stateParams.historyId -1;
  $scope.histories = [
        { title: 'Tokyo', id: 1, banner: 'img1.jpg', ticket: 12345, country:'Japan', price: 15000},
        { title: 'Seoul', id: 2 , banner: 'img2.jpg', ticket: 34567, country:'Korea', price: 10000},
        { title: 'Singapore', id: 3 , banner: 'img3.jpg', ticket: 56789, country:'Singapore', price: 10000},
        { title: 'Jakarta', id: 4 , banner: 'img4.jpg', ticket: 01234, country:'Indonesia', price: 11000},
      ];
})
.controller('MapCtrl', function($scope, $state,$ionicLoading, $compile) {
    $scope.init = function() {
        
        var myLatlng = new google.maps.LatLng(-6.312791, 106.863136);

        var mapOptions = {
          center: myLatlng,
          zoom: 16,
          disableDefaultUI: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map"),
            mapOptions);

        var geoLoc = [
          {lat: -6.313196, lng: 106.861591, id:1},
          {lat: -6.311618, lng: 106.860078, id:2}
        ]; 

        //Marker + infowindow + angularjs compiled ng-click

        for (var i = 0; i < geoLoc.length; ++i) {
          var marker = new google.maps.Marker({
            position: {
              lat: geoLoc[i].lat,
              lng: geoLoc[i].lng
            },
            map: map
          });
          state(marker, geoLoc[i].id);
        }

        // Add a marker at the center of the map.

        $scope.map = map;
    };
    
    function state(marker, secretMessage) {

      marker.addListener('click', function() {
        $state.go("app.outletInfo", {id:secretMessage})
      });
    }

    // google.maps.event.addDomListener(window, 'load', initialize);

    $scope.centerOnMe = function() {
        if(!$scope.map) {
            return;
        }

        $scope.loading = $ionicLoading.show({
          content: 'Getting current location...',
          showBackdrop: false
        });

        navigator.geolocation.getCurrentPosition(function(pos) {
          $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
          $scope.loading.hide();
        }, function(error) {
          alert('Unable to get location: ' + error.message);
        });
    };

    $scope.clickTest = function() {
        alert('Example of infowindow with ng-click')
    };
});

// .controller('PlaylistCtrl', function($scope, $stateParams) {
// });

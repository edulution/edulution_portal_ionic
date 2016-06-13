// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('portal', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
.controller('ContentCtrl',function($scope, $ionicModal){
  $scope.selectedTest = "";
  $scope.tab = 0;   /* initially set tab to 1*/
  $scope.toggleTab = function (setTab) { /* Set tab to whatever tab user clicks*/
    if ($scope.tab == setTab){
      $scope.tab=0;
      console.log($scope.tab);
    }
    else{
      $scope.tab = setTab;
      console.log($scope.tab);
    }
  };
  $scope.isSelected = function (checkTab) {/* Check which tab is selected to trigger show of selected tab */
    return $scope.tab === checkTab;
  };

  /*Modal when test is selected*/
  $ionicModal.fromTemplateUrl('templates/modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  // Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });
  $scope.chooseTest = function (test) {
    $scope.selectedTest = test;
    $scope.modal.show();
    // body...
  }
  $scope.checkPassword = function (password) {
    // body...
    if (password == "admin") {
      $scope.modal.hide();
      $scope.modal.remove();
      window.open("/tests/"+$scope.selectedTest+".html","_self")
      $scope.selectedTest = "";
      
    }
  };
         
});


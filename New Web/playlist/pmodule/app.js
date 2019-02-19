angular.module('passProtect', ['ngAnimate', 'ngSanitize', 'ui.bootstrap']);
angular.module('passProtect').controller('ModalDemoCtrl', function ($scope,$rootScope,$uibModal, $log, $document) {
  var $ctrl = this;

  $ctrl.animationsEnabled = true;

  $ctrl.open = function (test, parentSelector) {
    $rootScope.selectedTest = test;
    var parentElem = parentSelector ? 
      angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
    var modalInstance = $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'testModalContent.html',
      controller: 'ModalInstanceCtrl',
      controllerAs: '$ctrl',
      appendTo: parentElem
    });
  };
});

angular.module('passProtect').controller('ModalInstanceCtrl', function ($scope,$rootScope,$uibModalInstance) {
  $scope.coachPassword ="Ctrib3";
  $scope.wrongPassword = false;

  var $ctrl = this;

  $ctrl.ok = function () {
    $uibModalInstance.close($ctrl.selected.item);
  };

  $ctrl.cancel = function () {
    $uibModalInstance.dismiss();
  };

  $ctrl.checkPassword = function (password) {
    if (password == $scope.coachPassword) {
      $scope.wrongPassword = false;
      $uibModalInstance.dismiss();
      window.open("../tests/"+$rootScope.selectedTest+".html","_blank","location=no");
      $scope.selectedTest = "";
    }
    else{
      $scope.wrongPassword = true;
    }
  };
});

// Please note that the close and dismiss bindings are from $uibModalInstance.

angular.module('passProtect').component('modalComponent', {
  templateUrl: 'testModalContent.html',
  bindings: {
    resolve: '<',
    close: '&',
    dismiss: '&'
  },
  controller: function () {
    var $ctrl = this;

    $ctrl.$onInit = function () {
      $ctrl.items = $ctrl.resolve.items;
      $ctrl.selected = {
        item: $ctrl.items[0]
      };
    };

    $ctrl.ok = function () {
      $ctrl.close({$value: $ctrl.selected.item});
    };

    $ctrl.cancel = function () {
      $ctrl.dismiss({$value: 'cancel'});
    };
  }
});
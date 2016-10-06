var footerController = function($scope, SETTINGS) {
  $scope.settings = SETTINGS;
};

angular.module('testApp')
  .controller('footerController', footerController);

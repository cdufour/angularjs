var adminController = function($scope, playerFactory) {
  $scope.player = {
    name: '',
    number: '',
    nbGoals: ''
  };

  $scope.addPlayer = function() {
    playerFactory.addPlayer($scope.player)
      .then(function(){console.log('ok');});
  };
};

angular.module('testApp')
  .controller('adminController', adminController);

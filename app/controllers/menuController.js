var menuController = function($scope) {
  var menu = [
    {label: 'Accueil', url:'#/'},
    {label: 'Aide', url:'#/help'}
  ];
  $scope.menu = menu;
};

angular.module('testApp')
  .controller('menuController', menuController);

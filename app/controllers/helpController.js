var helpController = function($scope, languageService) {
  $scope.title = "Page d'aide";
  $scope.languages = languageService.getLanguages();
};

angular.module('testApp')
  .controller('helpController', helpController);

var playerController = function($scope, $routeParams, playerFactory) {

  var successCb = function(player) {
    if (player.data !== null) {
      $scope.player = player.data;
    }
  };

  var errorCb = function() {
    console.log('Erreur');
  };


  // étape 1 : récupérer l'identifiant (paramètre de route)
  // du joueur
  var id = $routeParams.id;

  if (id) {
    /*
    var player = playerFactory.getPlayerById(id);
    if (player !== null) {
      $scope.player = player;
    }
    */
    playerFactory.getPlayerById(id).then(successCb, errorCb);
  }


};

angular.module('testApp')
  .controller('playerController', playerController);

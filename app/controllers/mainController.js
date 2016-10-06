var mainController = function($scope, $interval, playerFactory) {
  var playersData = [];

  // callack executé en case de succès de la requête ajax
  var successCb = function(players) {
    playersData = players.data;
    $scope.players = players.data;
    $scope.selectedProp = 'number';
    $scope.isReversed = true;
    $scope.action = 'Démarrer';
    $scope.isVisible = false; // utilisé pour la visibité de l'image

    // variables locales (privées)
    var isSlideshowRunning = false; // flag
    var interv = null;

    $scope.changeOrder = function(prop) {
      $scope.selectedProp = prop;
      $scope.isReversed = !$scope.isReversed;
    };

    $scope.showBigPicture = function(player) {
      if (!isSlideshowRunning) { // slideshow à l'arrêt
        $scope.pictureHover = player;
        $scope.isVisible = true; // on s'assure que l'image soit affichée
      }
    };

    $scope.slideshow = function() {

      if (isSlideshowRunning) {
        //on arrête l'interval
        $scope.isVisible = false; // on masque l'image
        $scope.action = 'Démarrer';
        $interval.cancel(interv);

      } else {
        // On démarre l'interval
        $scope.isVisible = true; // on affiche l'image
        $scope.action = 'Arrêter';
        var i = 0;

        // première image chargée immédiatement
        $scope.pictureHover = playersData[i].picture;
        i++; // incrémentation de i pour démarrer l'interval
        // à partir de l'image d'indice 1

        interv = $interval(function() {
          if (i < playersData.length) {
            $scope.pictureHover = playersData[i].picture;
            i++;
          } else {
            i = 0;
          }
        }, 2000);

      }
      isSlideshowRunning = !isSlideshowRunning;
    };
  };

  // callack executé en cas d'échec de la requête ajax
  var errorCb = function() {
    console.log('Erreur');
  };

  // on reçoit une promesse de la part du factory
  playerFactory.getPlayers().then(successCb, errorCb);
};

angular.module('testApp')
  .controller('mainController', mainController);

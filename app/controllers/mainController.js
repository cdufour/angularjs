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

    // chargement des équipes
    // idéalement : à récupér par le biais d'un service/factory
    $scope.clubs = ['PSG', 'Juventus', 'Parma', 'Manchester', 'Porto'];

    $scope.goalsRange = [
      {val:'all', label:'--Nombre de buts inscrits--'},
      {val:'0-50', label:'entre 0 et 50'},
      {val:'50-100', label:'entre 50 et 100'},
      {val:'100-150', label:'entre 100 et 150'},
      {val:'150-200', label:'entre 150 et 200'},
      {val:'200-10000', label:'plus de 200'},
    ];

    // variables locales (privées)
    var isSlideshowRunning = false; // flag
    var interv = null;

    $scope.nbGoalsSearch = 'all';

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

    $scope.customFilter = function(element) {
      // retourne vrai si la propriété number est supérieure 6
      //return element.number > 6 ? true : false;

      //return (element.name.indexOf('o') != -1) ? true : false;
      //return (element.name === 'Pogba') ? true : false;

      /*
      if ($scope.search) {
        return (element.name.indexOf($scope.search) != -1) ? true : false;
      } else {
        return true;
      }
      */

      /*
      if ($scope.search) {

        if (
          element.name.indexOf($scope.search) != -1 ||
          element.number == $scope.search
        ) {
          return true;
        } else {
          return false;
        }

      } else {
        return true;
      }
      */

      var val = $scope.nbGoalsSearch;
      if (val != "all") {
        var result = val.split('-');
        var min = result[0];
        var max = result[1];
        var goals = element.nbGoals;
        if (goals >= min && goals < max) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }

    };

    $scope.isCapoCannoniere = function(nbGoals) {
      var players = $scope.players;
      var max = 0;
      for (var i=0; i<players.length; i++) {
        max = players[i].nbGoals;

        if (players[i].nbGoals > max) {
          max = players[i].nbGoals;
        }
      }
      console.log(max);
      return max == nbGoals ? 'maxGoals' : '';

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

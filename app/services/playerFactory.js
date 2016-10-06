var playerFactory = function($http) {
  var factory = {};
  var players = [];

  factory.getPlayers = function() {
    // traitement possible sur les données avant retour
    // par exemple : tester l'authentification

    //return players;

    // retourne ne promesse dont les callbacks seront
    // traités côté controller
    return $http.get('http://localhost:5000/players');
  };

  factory.getPlayerById = function(id) {
    /*
    var player = null;
    for (var i=0; i<players.length; i++) {
      // === stricte égalité les données doivent être de même type
      if (parseInt(id) === players[i].id) {
        player = players[i];
        break; // sortie de boucle
      }
    }
    console.log(player);
    return player;
    */
    return $http.get('http://localhost:5000/players/' + id);
  };

  factory.getPlayersByClub = function(name) {
    var foundPlayers = []; // tableau des joueurs trouvés
    for(var i=0; i<players.length; i++) {
      var clubs = players[i].clubs;
      if (clubs) { // on vérifie que clubs n'est pas undefined
        for(var j=0; j<clubs.length; j++) {
          if (name === clubs[j].name) {
            foundPlayers.push(players[i]);
            break; // sortie de boucle
          }
        } // fin de boucle sur clubs
      } // fin if
    } // fin de boucle sur players
    console.log(foundPlayers);
    return foundPlayers; // on retoure le tableau de joueurs trouvés
    // par rapport au du club passé en entrée
  };

  return factory;
};

angular.module('testApp')
  .factory('playerFactory', playerFactory);

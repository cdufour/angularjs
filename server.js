var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var players = [
  {
    id:1,
    name:'Pogba',
    number:10,
    picture:'pogba.jpg',
    clubs: [
      {name:'Manchester', period:'2012-2014'},
      {name:'Juventus', period:'2014-2016'}
    ],
    birthdate:'2000-03-03',
    foot: 'right',
    nbGoals: 38
  },
  {
    id:2, name:'Del Piero',
    number:10,
    picture:'delpiero.jpg',
    clubs: [
      {name:'Juventus', period:'1994-2012'}
    ],
    birthdate:'1974-03-03',
    foot: 'right',
    nbGoals: 291
  },
  {
    id:3,
    name:'buffon',
    number:1,
    picture:'buffon.jpg',
    clubs: [
      {name:'Parma', period:'2012-2014'},
      {name:'Juventus', period:'2014-2016'}
    ],
    birthdate:'1950-03-03',
    foot: 'left',
    nbGoals: 0
  },
  {id:4, name:'nedved', number:6, picture:'nedved.jpg', nbGoals:165},
  {id:5, name:'Lemina', number:6, picture:'lemina.jpg', nbGoals:5},
  {id:6, name:'Higuain', number:9, picture:'higuain.jpg', nbGoals:265},
];

// permet de travailler avec le format json
// dans les requêtes en post (body)
app.use(bodyParser.json());


app.use(function(req, res, next) {
  // ajoute à l'entête de la réponse l'autorisation cross-origin
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/test', function(req, res) {
  res.send('test réussi !');
});

app.get('/players', function(req, res) {
  res.json(players);
});

app.get('/players/:id', function(req, res) {
  var id = req.params.id;
  var player = null;
  for (var i=0; i<players.length; i++) {
    // === stricte égalité les données doivent être de même type
    if (parseInt(id) === players[i].id) {
      player = players[i];
      break; // sortie de boucle
    }
  }

  // le server envoie le player au client
  res.json(player);

});

app.post('/player/new', function(req, res) {
  var id = getLastId(players);

  var player = {
    id: id + 1, // incrémentation de l'id
    name: req.body.name,
    number: parseInt(req.body.number),
    nbGoals: parseInt(req.body.nbGoals)
  };
  // ajout du player au tableau (database) des players
  players.push(player);
  res.json('merci');
});

app.listen(5000, function() {
  console.log('Server node écoute le port 5000...');
});

// Function permettat d'obtenir l'id le plus élevé
// dans un tableau d'objets disposant d'une propriété id
function getLastId(array) {
  var maxId = 0;
  for(var i=0; i<array.length; i++) {
    if (array[i].id > maxId) {
      maxId = array[i].id;
    }
  }
  return maxId;
}

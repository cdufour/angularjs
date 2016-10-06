var http = require('http');
var express = require('express');

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
    foot: 'right'
  },
  {
    id:2, name:'Del Piero',
    number:10,
    picture:'delpiero.jpg',
    clubs: [
      {name:'Juventus', period:'1994-2012'}
    ],
    birthdate:'1974-03-03',
    foot: 'right'
  },
  {
    id:3,
    name:'Buffon',
    number:1,
    picture:'buffon.jpg',
    clubs: [
      {name:'Parma', period:'2012-2014'},
      {name:'Juventus', period:'2014-2016'}
    ],
    birthdate:'1950-03-03',
    foot: 'left'
  },
  {id:4, name:'Nedved', number:6, picture:'nedved.jpg'},
  {id:5, name:'Lemina', number:6, picture:'lemina.jpg'},
  {id:6, name:'Higuain', number:9, picture:'higuain.jpg'},
];


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


app.listen(5000, function() {
  console.log('Server node écoute le port 5000...');
});

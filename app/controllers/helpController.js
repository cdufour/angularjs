var helpController = function($scope, languageService) {
  $scope.title = "Page d'aide";
  $scope.languages = languageService.getLanguages();

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

  $scope.players = players;
};

angular.module('testApp')
  .controller('helpController', helpController);

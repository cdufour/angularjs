// déclaration du module principal
angular.module('testApp', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        controller: 'mainController',
        templateUrl: 'app/views/home.html'
      })
      .when('/players/list', {
        controller: 'mainController',
        templateUrl: 'app/views/home.html'
      })
      .when('/players/:id', {
        controller: 'playerController',
        templateUrl: 'app/views/player.html'
      })
      .when('/help', {
        controller:'helpController',
        templateUrl:'app/views/help.html'
      })
      .when('/404', {
        templateUrl:'app/views/404.html'
      })
      .otherwise({redirectTo:'/404'});
  });

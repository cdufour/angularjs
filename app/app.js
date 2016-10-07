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
      .when('/admin', {
        controller:'adminController',
        templateUrl:'app/views/admin.html'
      })
      .when('/404', {
        templateUrl:'app/views/404.html'
      })
      .otherwise({redirectTo:'/404'});
  });

angular.module('testApp')
  .constant('SETTINGS', {
    version: '1.0',
    author: 'Chris',
    year: '2016'
  });

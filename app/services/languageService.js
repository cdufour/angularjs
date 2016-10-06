var languageService = function() {
  this.getLanguages = function() {
    var languages = ['FR', 'EN', 'IT'];
    return languages;
  };
};

angular.module('testApp')
  .service('languageService', languageService);

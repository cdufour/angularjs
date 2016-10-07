var loremDirective = function() {
  return {
    scope: {
      //test:'@' passage d'un string
      player: '=',
      test: '@'
    }, // scope isolé
    restrict: 'E',
    replace:false,
    //template:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consectetur nisl lectus, vel imperdiet odio faucibus in. Pellentesque facilisis eros et commodo ullamcorper. Integer quis odio nibh. Vestibulum porttitor quam magna, in scelerisque nunc porttitor eget. Duis mollis tortor ut eleifend fringilla. Aliquam nulla mi, pretium sit amet nunc nec, tristique mattis diam. Donec sodales vulputate orci, non rutrum odio tristique sit amet.'
    templateUrl:'app/directives/templates/lorem.html'
  };
};

angular.module('testApp')
  .directive('lorem', loremDirective);

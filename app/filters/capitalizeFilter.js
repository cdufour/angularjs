var capitalizeFilter = function() {
  return function(item) {
    var part1 = item.charAt(0);
    var part2 = item.substring(1);

    return part1.toUpperCase() + part2;
  };
};

angular.module('testApp')
  .filter('capitalize', capitalizeFilter);

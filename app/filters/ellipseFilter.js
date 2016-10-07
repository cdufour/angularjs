var ellipseFilter = function() {
  return function(item, maxLength) {
    var shortenItem = '';

    if (item.length > maxLength) {
      shortenItem = item.substring(0, maxLength) + '...';
      return shortenItem;
    } else {
      return item;
    }
  };
};

angular.module('testApp')
  .filter('ellipse', ellipseFilter);

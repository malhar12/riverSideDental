(function(){
  'use strict';

  angular.module('riversideDental')
        .filter('sanitizeUrl', ['$sce', function($sce) {
          return function(url) {
            return $sce.trustAsResourceUrl(url);
          };
        }]);
})();

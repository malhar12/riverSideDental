(function(){
  'use strict';

  angular.module('riversideDental')
    .directive('mAppLoading', ['$animate', function($animate){

      return{
        link: function(scope, elem, attrs){
          $animate.leave(elem.children().eq(1)).then(
            function cleanUpAfterAnimation(){
              elem.remove();
              scope = elem = attrs = null;
            }
          );
        },
        restrict: 'C'
      };

    }]);


})();

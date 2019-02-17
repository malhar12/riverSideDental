(function(){
  'use strict';

  angular.module('riversideDental')
        .directive('checkRes', [function(){
          return {
            scope: {
              slide: '@'
            },
            link: function(scope, elem, attrs){
                var screenRes = window.screen.width;
                if(screenRes < 760) {
                  // NOTE: Mobile screen devices
                  if(scope.slide === 0) {
                    elem[0].children[0].classList.remove('hide-slider');
                  } else if(scope.slide === 1) {
                    elem[0].children[0].classList.add('hide-slider');
                  }
                }
            }
          };
        }]);
})();

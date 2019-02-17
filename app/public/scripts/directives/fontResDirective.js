(function(){
  'use strict';

  angular.module('riversideDental')
      .directive('fontRes', [function(){
        return{
          restrict: 'EA',
          link: function(scope, elem, attrs){
            console.log('SCREEN WIDTH', window.screen.width);
            if(window.screen.width > 760) {
              elem[0].classList.add('lead-1440');
            }
          }
        };
      }]);
})();

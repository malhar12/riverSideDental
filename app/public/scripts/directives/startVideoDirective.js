(function(){
  'use strict';

  angular.module('riversideDental')
      .directive('startVideo', [function(){
        return{
          restrict: 'EA',
          link: function(scope, elem, attrs){
            var ele = document.querySelector('video');
            var playPromise = ele.play();

            if (playPromise !== undefined) {
               playPromise.then(_ => {
                 // Automatic playback started!
                 // Show playing UI.
                 console.log('playing video started for the first time');
               })
               .catch(error => {
                 // Auto-play was prevented
                 // Show paused UI.
                 console.log('error', error);
               });
             }
          }
        };
      }]);
})();

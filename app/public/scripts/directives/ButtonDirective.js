(function(){
  'use strict';

  angular.module('riversideDental')
      .directive('buttonAnimate', ['$rootScope', function($rootScope){
        return{
          restrict: 'EA',
          link: function(scope, element, attrs){
            element.bind('click', function(){
              // console.log(element, 'CLICK EVENT');
              if(!element[0].classList.contains('is-active')){
                $rootScope.$broadcast('showContent', {
                  'showContent': true
                });
                element[0].classList.add('is-active');
                element[0].classList.add('margin-right-250');
                document.getElementsByClassName("container-box")[0].classList.remove('ng-hide');
                document.getElementById("sidenav").style.width = "250px";
                document.getElementById("main").style.marginRight = "250px";
              } else {
                $rootScope.$broadcast('showContent', {
                  'showContent': false
                });
                element[0].classList.remove('is-active');
                element[0].classList.remove('margin-right-250');
                document.getElementsByClassName("container-box")[0].classList.add('ng-hide');
                document.getElementById("sidenav").style.width = "0";
                document.getElementById("main").style.marginRight= "0";
              }
            });
          }
        };
      }]);
})();

(function(){
  'use strict';

  angular.module('riversideDental')
    .directive('navDirective', [function(){

      return {
        restrict: 'E',
        templateUrl: 'views/template/navBar.html'
      };

    }]);


})();

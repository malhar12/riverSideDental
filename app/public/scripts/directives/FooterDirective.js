(function(){
  'use strict';

  angular.module('riversideDental')
    .directive('footerDirective', [function(){

      return {
        restrict: 'E',
        templateUrl: 'views/template/footer.html'
      };

    }]);


})();

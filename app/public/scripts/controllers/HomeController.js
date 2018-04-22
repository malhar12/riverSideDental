(function(){
  'use strict';

  angular.module('riversideDental')
    .controller('HomeController', [ '$rootScope', '$scope', function($rootScope, $scope){
      var vm = this;

      $rootScope.showContent = true;

      $rootScope.$on('showContent', function(event, data){
        $rootScope.showContent = data.showContent;
      });

      vm.isOpen = false;
      vm.fabOpen =false;
      vm.fabDirection = 'left';

      vm.clickedMe = function(){
        console.log('clicked me');
      };

      vm.hideNavBar = function(){
        vm.isOpen = vm.isOpen ? false : true;
      };
    }]);
})();

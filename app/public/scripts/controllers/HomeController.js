(function(){
  'use strict';

  angular.module('riversideDental')
    .controller('HomeController', ['$rootScope', 'ngProgressFactory', function($rootScope, ngProgressFactory){
      var vm = this;

      vm.isOpen = false;
      vm.fabOpen =false;
      vm.fabDirection = 'left';

      vm.clickedMe = function(){
        alert('clicked me');
      };

      vm.hideNavBar = function(){
        vm.isOpen = vm.isOpen ? false : true;
      };

      $rootScope.progressBar = ngProgressFactory.createInstance();

      //ngProgress.setColor('#ffffff');

      $rootScope.$on('$routeChangeStart', function(){
        $rootScope.progressBar.start();
      });

      $rootScope.$on('$routeChangeSuccess', function(){
        $rootScope.progressBar.complete();
      });

    }]);
})();

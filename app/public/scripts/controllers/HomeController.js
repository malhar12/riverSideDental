(function(){
  'use strict';

  angular.module('riversideDental')
    .controller('HomeController', [function(){
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
    }]);
})();

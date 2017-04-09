(function(){
  'use strict';

  angular.module('riversideDental')
    .controller('HomeController', [function(){
      var vm = this;

      vm.isOpen = false;
      vm.width = {
        navBar: 10,
        trigger: 11
      };

      vm.hideNavBar = function(){
        vm.isOpen = vm.isOpen ? false : true;
        if(vm.isOpen){
          vm.width.trigger = 1;
        } else {
          vm.width.trigger = 11;
        }

      };
    }]);
})();

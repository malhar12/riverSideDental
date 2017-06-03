(function(){
  'use strict';

  angular.module('riversideDental')
    .controller('ServicesController', ['$mdMedia', 'images', function($mdMedia, images){
      var vm = this;

      vm.index = -1;
      // vm.showModal = false;

      vm.checkMedia = function(){
        return $mdMedia('xs');
      };

      vm.putData = function(i){
        vm.index = i;
        console.log(vm.imageData.data[vm.index].modalData);
        // vm.showModal = true;
      };

      vm.getData = function(){
        return vm.index;
      };

      vm.imageData = [];

      vm.imageData = images;

      // console.log(vm.imageData.data);
    }]);
})();

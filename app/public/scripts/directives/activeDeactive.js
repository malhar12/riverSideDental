(function(){
  'use strict';

  angular.module('riversideDental')
      .directive('activeDeactive', [function(){
        return{
          restrict: 'EA',
          link: function(scope, elem, attrs){
            elem.bind('click', function(){
              var $otherDivs = $(this).parents('.panel.panel-default').siblings('.panel.panel-default');
              $('.collapse',$otherDivs).removeClass('in');
              // $(this).find('i').removeClass('fa-chevron-down').addClass('fa-chevron-up');

              // $(this).find('i').toggleClass('fa-chevron-down fa-chevron-up');
              // $('.fa-chevron-down').toggleCLass('rotate');
              $(this).children('.panel-heading').children('.fa').css('transform', 'rotate(180deg)');
// $('.list-container .panel-group .panel.panel-default .panel-heading > .fa')              
            });
          }
        };
      }]);
})();

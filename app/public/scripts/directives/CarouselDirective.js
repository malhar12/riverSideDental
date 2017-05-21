(function(){
  'use strict';

  angular.module('riversideDental')
    .directive('carousel', [function(){
      return{
        restrict: 'A',
        link: function(elem, attrs){
          $(document).ready(function(){
            $('.carouselContainer').slick({
              responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
              ],
              autoplay: false
            });
          });
        }
      };
    }]);
})();

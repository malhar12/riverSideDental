(function(){
  'use strict';

  angular.module('riversideDental')
      .controller('AboutController', ['$sce', '$rootScope' ,function($sce, $rootScope){
        var vm = this;

        this.teamSolos = [
          {
            imgSrc: 'images/teamPic-1.png',
            name: 'Alex Fusch',
            description: 'Nulla venenatis sodales venenatis. Nullam at nunc quis urna semper malesuada. Curabitur ut augue ante. Fusce elementum neque vel tellus ultrices.'
          },
          {
            imgSrc: 'images/teamPic-2.png',
            name: 'Steve Kramer',
            description: 'Morbi finibus augue vitae sodales tincidunt. Morbi scelerisque, nibh vitae varius congue, eros justo facilisis est, quis luctus lorem felis vitae ante.'
          }
        ];

        // this.number = [{label: 1}, {label: 2}, {label: 3}, {label: 4}, {label: 5}, {label: 6}, {label: 7}, {label: 8}];
        this.numberLoaded = true;

        this.config = {
  				sources: [
  					{src: $sce.trustAsResourceUrl("videos/sliceOfNYC-2-480p.mp4"), type: "video/mp4"}
  				],
  				theme: "../../bower_components/videogular-themes-default/videogular.css"
  			};

        this.breakpoints = [
          {
            breakpoint: 760,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 300,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          }
        ];


        this.slickConfig = {
          enabled: true,
          autoplay: false,
          draggable: false,
          autoplaySpeed: 3000,
          mobileFirst: true,
          pauseOnFocus: true
        };
      }]);
})();

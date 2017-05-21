(function(){
  'use strict';

  angular.module('riversideDental')
      .controller('AboutController', ['$sce', function($sce){
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
          },
          {
            imgSrc: 'images/teamPic-3.png',
            name: 'Aaron Phischles',
            description: 'bibendum urna a, egestas sem. Ut ultricies semper urna. Nunc ut metus tristique, ornare ipsum quis, interdum est. Praesent placerat diam justo, et.'
          },
          {
            imgSrc: 'images/teamPic-4.png',
            name: 'Kristy Ann',
            description: 'Duis vel purus posuere, porta mauris ac, suscipit dolor. Vivamus iaculis eros et magna maximus efficitur. Cras malesuada eros nec accumsan malesuada.'
          }
        ];

        this.number = [{label: 1}, {label: 2}, {label: 3}, {label: 4}, {label: 5}, {label: 6}, {label: 7}, {label: 8}];
        this.numberLoaded = true;

        this.config = {
  				sources: [
  					{src: $sce.trustAsResourceUrl("videos/sliceOfNYC-2-480p.mp4"), type: "video/mp4"}
  				],
  				theme: "../../bower_components/videogular-themes-default/videogular.css"
  			};

        this.breakpoints = [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 480,
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

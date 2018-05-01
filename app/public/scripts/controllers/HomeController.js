(function(){
  'use strict';

  angular.module('riversideDental')
    .controller('HomeController', [ '$rootScope', '$scope', '$sce', 'fullPageService', function($rootScope, $scope, $sce, fullPageService){
      var vm = this;

      $rootScope.showContent = true;

      $rootScope.$on('showContent', function(event, data){
        $rootScope.showContent = data.showContent;
      });

      vm.myVideo = {
        mp4: "videos/dentalXplorer.mp4"
      };

      vm.isOpen = false;
      vm.fabOpen =false;
      vm.fabDirection = 'left';

      vm.clickedMe = function(){
        console.log('clicked me');
      };

      vm.hideNavBar = function(){
        vm.isOpen = vm.isOpen ? false : true;
      };

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

      this.moveTo = function(slideIndex){
        $scope.$broadcast('TransitionToEvent', slideIndex);
      }

      this.services = [
        {
          'name': 'Pre-Dental School',
          'list': [
            'It will take out the fear of unknown out of the application process and the life after graduation.',
            'We will help them feel more confident during the interview sessions and prepare them with mock interviews to get selected in the dental school.',
            'Provide one on one counseling.',
            'Offer a Test drive for their career to experience it first hand through shadowing practicing dentist in a dental setting in USA which can boost chances during application process to stand out.',
            'Arrange accommodation, food and tour of NYC while here for shadowing or interviews.'
          ]
        },
        {
          'name': 'During Dental School',
          'list': [
            'Educate and guide the students so that they can Make the most out of opportunities available while in dental school.',
            'Provide clear and detailed information about earning potential, going over what is generally offered in job contracts and the kind of jobs available to kick start their career.',
            'Guidance about important things to know before signing the first contract and how to pick wisely.',
            'Discuss pros and cons of private vs corporate vs community dental practices.'
          ]
        },
        {
          'name': 'Post graduation',
          'list': [
            'Networking opportunities and also potential job offer after graduation.',
            'Guide them through the process of owning a dental practice.'
          ]
        }
      ];

      // this.number = [{label: 1}, {label: 2}, {label: 3}, {label: 4}, {label: 5}, {label: 6}, {label: 7}, {label: 8}];
      this.numberLoaded = true;

      this.config = {
        sources: [
          {src: $sce.trustAsResourceUrl("videos/dentalXplorer.mp4"), type: "video/mp4"}
        ],
        autoPlay: true,
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

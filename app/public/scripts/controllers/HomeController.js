(function(){
  'use strict';

  angular.module('riversideDental')
    .controller('HomeController', [ '$rootScope', '$scope', '$sce', 'fullPageService', function($rootScope, $scope, $sce, fullPageService){
      var vm = this;

      vm.onFirstSlide = true;

      // Handle page visibility change events
      function handleVisibilityChange() {
        if (document.visibilityState == "hidden") {
          document.getElementById('video-background').pause();
        } else if(document.visibilityState !== "hidden" && document.getElementById('video-background').paused && vm.onFirstSlide) {
          document.getElementById('video-background').play();
        }
      }

      document.addEventListener('visibilitychange', handleVisibilityChange, false);

      // document.getElementById('main').addEventListener('wheel')

      $rootScope.showContent = true;

      $rootScope.$on('showContent', function(event, data){
        $rootScope.showContent = data.showContent;
      });

      vm.src = "videos/mute-vbg-480.mp4";

      vm.myVideo = {
        mp4: "videos/dentalXplorer.mp4"
      };

      vm.trustedUrl = $sce.trustAsResourceUrl("https://youtu.be/8szYYh4Uz-E");

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
          imgSrc: 'images/Dr_Manish.JPG',
          name: 'Dr. Manish',
          description: `Dr. Manish completed his dental education from Boston University's Goldman School of Dental Medicine in 2009. Committed to providing the best, most advanced dental care, Dr. Manish keeps up to date on advances in the dental field and enhances his skills by continual education. Dr. Manish is a certified Invisalign® provider and enjoys creating beautiful smiles with the use of clear braces. Dr. Manish is affiliated with the Massachusetts Dental Society, Valley District Dental Society and the American Dental Association. He attends many educational courses to keep abreast of all the latest advances in the dental field. On the personal front, charismatic and fun, Dr. Manish is always the life of a party and loves to make people smile. In his spare time he enjoys Crossfit and travelling.`
        },
        {
          imgSrc: 'images/Dr_Neha.JPG',
          name: 'Dr. Neha Arora',
          description: 'Dr. Arora graduated from New York University College of Dentistry, Doctorate of Dental Surgery New York City, NY. Dr. Arora is an active member of the American Dental Association. She also has certifications in Invisalign, Nitrous Oxide, Oral Sedation and CPR. She is committed to continuing education in order to remain current with state-of-the-art technology, procedures and materials in dentistry. When she isn\'t practicing dentistry, she loves to read books.'
        }
      ];

      this.riverSidePhotos = ['images/riverSideDental-1.png', 'images/riverSideDental-2.png', 'images/riverSideDental-3.png'];

      this.slides = [
        {
          image: 'images/riverSideDental-1.png',
          id: '1',
          text: 'abc'
        },
        {
          image: 'images/riverSideDental-2.png',
          id: '2',
          text: 'def'
        },
        {
          image: 'images/riverSideDental-3.png',
          id: '3',
          text: 'ghi'
        }
      ];

      this.myInterval = 5000;
      this.noWrapSlides = false;
      this.active = 0;

      this.moveTo = function(slideIndex){
        $scope.$broadcast('TransitionToEvent', slideIndex);

        if(slideIndex !== 0) {
          document.getElementById('video-background').pause();
          vm.onFirstSlide = false;
        } else {
          document.getElementById('video-background').play();
          vm.onFirstSlide = true;
        }
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

      this.checkResolution = function(){
        return window.screen.width > 760;
      }

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
        pauseOnFocus: true,
        arrows: true
      };
    }]);
})();

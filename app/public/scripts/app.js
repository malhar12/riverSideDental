(function(){
  'use strict';

  angular.module('riversideDental', [
    'ui.router',
    'ngMaterial',
    'ngProgress',
    'ngAnimate',
    'slickCarousel',
    'fullpage.js',
    'ngSanitize',
    'video-background',
		'com.2fdevs.videogular',
	  'com.2fdevs.videogular.plugins.controls',
	  'com.2fdevs.videogular.plugins.overlayplay',
	  'com.2fdevs.videogular.plugins.buffering',
	  'com.2fdevs.videogular.plugins.poster'
  ])
      .run(['$rootScope', 'ngProgressFactory', '$timeout', '$state', '$stateParams', function($rootScope, ngProgressFactory, $timeout, $state, $stateParams){

        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;

        $rootScope.progressBar = ngProgressFactory.createInstance();

        $rootScope.progressBar.setColor('#e5d80e');

        $rootScope.$on('$stateChangeStart', function(){
          $rootScope.progressBar.start();
        });

        $rootScope.$on('$stateChangeSuccess', function(){
          $rootScope.progressBar.complete();
        });

        $rootScope.$on('$stateChangeError', function(){
          $rootScope.progressBar.reset();
        });
      }])
      .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 'fullPageConfigProvider', function($stateProvider, $urlRouterProvider, $locationProvider, fullPageConfigProvider){
        $urlRouterProvider.otherwise('/main');

        //$locationProvider.html5Mode(true);

        $stateProvider.state('home', {
          url: '/main',
          templateUrl: 'views/home.html',
          controller: 'HomeController',
          controllerAs: 'homeCtrl'
        })
        .state('about', {
          url: '/about',
          templateUrl: 'views/about.html',
          controller: 'AboutController',
          controllerAs: 'aboutCtrl'
        })
        .state('services', {
          url: '/services',
          templateUrl: 'views/services.html',
          resolve: {
            imageService: 'imageService',
            images: function(imageService){
              return imageService.getData().then(function(data){
                console.log(data);
                return data;
              }, function(err){
                console.log(err);
              });
            }
          },
          controller: 'ServicesController',
          controllerAs: 'servicesCtrl'
        })
        .state('contact', {
          url: '/contact',
          templateUrl: 'views/contact.html',
          controller: 'ContactController',
          controllerAs: 'contactCtrl'
        });

        fullPageConfigProvider.setConfig({
    				//Navigation
    		        lockAnchors: false,
    		        anchors:['1', '2', '3'],
    		        navigation: false,
    		        navigationPosition: 'right',
    		        navigationTooltips: ['firstSlide', 'secondSlide'],
    		        showActiveTooltip: false,
    		        slidesNavigation: false,
    		        slidesNavPosition: 'bottom',

    		        //Scrolling
    		        css3: true,
    		        scrollingSpeed: 700,
    		        autoScrolling: true,
    		        fitToSection: true,
    		        fitToSectionDelay: 1000,
    		        scrollBar: false,
    		        easing: 'easeInOutCubic',
    		        easingcss3: 'ease',
    		        loopBottom: false,
    		        loopTop: false,
    		        loopHorizontal: true,
    		        continuousVertical: false,
    		        continuousHorizontal: false,
    		        scrollHorizontally: false,
    		        interlockedSlides: false,
    		        dragAndMove: false,
    		        offsetSections: false,
    		        resetSliders: false,
    		        fadingEffect: false,
    		        normalScrollElements: '#element1, .element2',
    		        scrollOverflow: false,
    		        scrollOverflowReset: false,
    		        scrollOverflowOptions: null,
    		        touchSensitivity: 15,
    		        normalScrollElementTouchThreshold: 5,
    		        bigSectionsDestination: null,

    		        //Accessibility
    		        keyboardScrolling: true,
    		        animateAnchor: true,
    		        recordHistory: true,

    		        //Design
    		        controlArrows: true,
    		        verticalCentered: true,
    		        sectionsColor : [, '#fff', '#fff'],
    		        paddingTop: '3em',
    		        paddingBottom: '10px',
    		        fixedElements: '#sidenav, #menuButton',
    		        responsiveWidth: 0,
    		        responsiveHeight: 0,
    		        responsiveSlides: false,

    		        //Custom selectors
    		        sectionSelector: '.section',
    		        slideSelector: '.slide',

    		        lazyLoading: true,
                onLeave: function(index, nextIndex, direction){},
    		        afterLoad: function(anchorLink, index){},
    		        afterRender: function(){},
    		        afterResize: function(){},
    		        afterResponsive: function(isResponsive){},
    		        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
    		        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
    			});

      }]);
})();

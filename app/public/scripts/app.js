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
    'frSlidescroll',
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
        });

        fullPageConfigProvider.setConfig({
    				//Navigation
    		        lockAnchors: false,
    		        anchors:['1', '2', '3'],
    		        navigation: true,
    		        navigationPosition: 'right',
    		        navigationTooltips: ['firstSlide', 'secondSlide', 'thirdSlide'],

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

    			});

      }]);
})();

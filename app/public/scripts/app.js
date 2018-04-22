(function(){
  'use strict';

  angular.module('riversideDental', [
    'ui.router',
    'ngMaterial',
    'ngProgress',
    'ngAnimate',
    'slickCarousel',
    'fullPage.js',
    'ngSanitize',
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
      .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider){
        $urlRouterProvider.otherwise('/');

        //$locationProvider.html5Mode(true);

        $stateProvider.state('home', {
          url: '/',
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
      }]);
})();

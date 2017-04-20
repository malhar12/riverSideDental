(function(){
  'use strict';

  angular.module('riversideDental', [
    'ui.router',
    'ngMaterial',
    'ngProgress',
    'ngAnimate'
  ])
      .run(['$rootScope', 'ngProgressFactory', '$timeout', function($rootScope, ngProgressFactory, $timeout){
        $rootScope.progressBar = ngProgressFactory.createInstance();

        $rootScope.progressBar.setColor('blue');

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

        $locationProvider.html5Mode(true);

        $stateProvider.state('home', {
          url: '/',
          templateUrl: 'views/home.html',
          controller: 'HomeController',
          controllerAs: 'homeCtrl'
        })
        .state('about', {
          url: '/about',
          template: '<h1>About.html</h1>'
        });
      }]);
})();

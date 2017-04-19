(function(){
  'use strict';

  angular.module('riversideDental', [
    'ui.router',
    'ngMaterial',
    'ngProgress'
  ])
      .run(['$rootScope', 'ngProgressFactory', function($rootScope, ngProgressFactory){
        $rootScope.progressBar = ngProgressFactory.createInstance();

        //ngProgressFactory.setColor('#ffffff');

        $rootScope.$on('$routeChangeStart', function(){
          $rootScope.progressBar.start();
        });

        $rootScope.$on('$routeChangeSuccess', function(){
          $rootScope.progressBar.complete();
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

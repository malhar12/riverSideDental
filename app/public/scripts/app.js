(function(){
  'use strict';

  angular.module('riversideDental', [
    'ui.router',
    'ngMaterial'
  ])
      .config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/');

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
      });
})();

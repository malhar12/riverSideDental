(function(){
  'use strict';

  angular.module('riversideDental')
    .service('imageService', ['$http', function($http){
      return {
        getData: function(){
          return $http.get('images/imgData.json');
        }
      };
    }]);
})();

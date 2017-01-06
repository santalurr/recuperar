'use strict';

angular.module('myApp.products', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/products', {
    templateUrl: 'modules/products/products.html',
    controller: 'ProductsController'
  });
}])

.controller('ProductsController', [function() {

}]);
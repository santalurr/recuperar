'use strict';

angular.module('myApp.company', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/company', {
    templateUrl: 'modules/company/company.html',
    controller: 'CompanyController'
  });
}])

.controller('CompanyController', [function() {

}]);
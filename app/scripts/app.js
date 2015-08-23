'use strict';

/**
 * @ngdoc overview
 * @name frontendApp
 * @description
 * # frontendApp
 *
 * Main module of the application.
 */
var App = angular
  .module('frontendApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'angular-json-tree',
    'parsley',
    'checklist-model'
  ]);

// App.filter('printjson', function(){
//   return function(input) {
//     return JSON.stringify(input, null, "  ");
//   };
// })

'use strict';

App
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $urlRouterProvider.when('', '/home');

    $stateProvider
      .state('app', {
        url: '',
        abstract: true,
        template: '<div class="ui grid" ui-view></div>'
      })

      .state('app.home', {
        url: '/home',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })

  });

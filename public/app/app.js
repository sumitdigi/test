var firstApp = angular.module('firstApp', [
    'ui.router'
]);

firstApp.config(function($locationProvider) {
    $locationProvider.html5Mode(true);
})
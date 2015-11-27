var appAngular = angular.module('appAngular', []);

appAngular.config(function($interpolateProvider){
    $interpolateProvider.startSymbol('[{');
    $interpolateProvider.endSymbol('}]');
});

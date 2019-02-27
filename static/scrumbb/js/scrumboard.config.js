(function(){
    'use strict';

    angular.module('scrumboard.demo')
        .config(['$routeProvider', config])
        .run(['$http',run]);

    function config($routeProvider){

        $routeProvider
        .when('/', {
            templateUrl: '/static/scrumbb/html/scrumboard.html',
            controller: 'ScrumboardController',
        })
        .when('/login', {
            templateUrl: '/static/scrumbb/html/login.html',
            controller: 'LoginController',
        })
        .otherwise('/');

        }

    function run($http){
        $http.defaults.xsrfHeaderName = 'X-CSRFToken';
        $http.defaults.xsrfCookieName = 'csrftoken';
    }




})();
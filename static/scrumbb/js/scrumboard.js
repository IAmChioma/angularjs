

           (function(){
            'use strict';
            angular.module('scrumboard.demo',['ngRoute'])
            .controller('ScrumboardController', ['$scope','$http', '$location','Login' , ScrumboardController]);

            function ScrumboardController($scope, $http, $location, Login){
              $scope.add = function(list,title){
               var card ={
                title: title,
                list:list.id
               };
               $http.post('scrumboard/cards/', card)
               .then(function(response){
                list.cards.push(response.data);},
                function(){
                    alert('could not create card');
                    });
              };

//              $scope.login = function(){
//                $http.post('/auth_api/login/',
//                 {username: 'chioma', password: 'doe12345'});
//              };

              Login.redirectIfNotLoggedIn();
              $scope.data = [];
              $scope.logout = Login.logout;
              $scope.sortBy='story_points';
              $scope.reverse=true;
              $scope.showFilters=false;

              $http.get('scrumboard/lists/').then(function(response){
              $scope.data = response.data;
              });


            };
            })();

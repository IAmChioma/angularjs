
           (function(){
            'use strict';
            angular.module('scrumboard.demo',[])
            .controller('ScrumboardController', ['$scope', ScrumboardController]);

            function ScrumboardController($scope){
              $scope.person = {
              name: 'Joe',
              age: 35
              };
            }
            }());



           (function(){
            'use strict';
            angular.module('scrumboard.demo',[])
            .controller('ScrumboardController', ['$scope', ScrumboardController]);

            function ScrumboardController($scope){
              $scope.add = function(list,title){
               var card ={
                title: title
               };
               list.cards.push(card);
              };


              $scope.data = [
              {
              name: 'django models',
              cards : [
              { title: 'create models'},
              { title: 'create view'},
              ]
              },
              {
              name: 'Angular models',
              cards : [
              { title: 'create models'},
              { title: 'Write Html code'},
              ]
            },]};
            })();


           (function(){
            'use strict';
            angular.module('scrumboard.demo',[])
            .controller('ScrumboardController', ['$scope','$http', ScrumboardController]);

            function ScrumboardController($scope, $http){
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


              $scope.data = []
              $http.get('scrumboard/lists/').then(function(response){
              $scope.data = response.data;
              });
            };
            })();

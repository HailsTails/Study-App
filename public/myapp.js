var app = angular.module('studyApp', []);

app.controller('MainCtrl', [
  '$scope',
  function($scope){
    $scope.test = 'Hello world!';

    //Define initial tasks
    $scope.tasks = [
      {id: 1, title: 'assignment 1', due_date: 7, done: ' '},
      {id: 2, title: 'Essay 4', due_date: 3, done: 'x'}
    ];

    //Add Tasks
    $scope.addTask = function(){
      if(!$scope.title || $scope.title === '') { return; }
      $scope.tasks.push({
        id: 3,
        title: $scope.title,
        due_date: $scope.due_date,
        done: ' '
      });
    }

    //Tick off a task (change it to done)
    $scope.tickOff = function(task){
      if(task.done == ' '){
          task.done = 'x';
      }
      else if(task.done == 'x'){
          task.done = ' ';
      }
    }
}]);

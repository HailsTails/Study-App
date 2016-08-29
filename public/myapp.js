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
      done: ' '});
    $scope.title = '';
    $scope.due_date = '';
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

//set CLient ID and google auth settings
var _auth2;
var client_id = "73713153185-ml2ui4qa12p4tpfgiuhgebpsi374gnqc.apps.googleusercontent.com";
var _onGoogleLoad = function(){
  gapi.load('auth2', function(){
    auth2 = gapi.auth2.init({
      client_id: client_id
    }
  )})
}

//Sign in a user
function onSignIn(googleUser) {
  var id_token = googleUser.getAuthResponse().id_token;

  $.get(
    "https:/www.googleapis.com/oauth2/v3/tokeninfo",
    {id_token : id_token},
    function(data) {
      if(data['aud']==client_id){
        console.log(data);
      }
    }
  );

}

//Sign out a user
function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
}

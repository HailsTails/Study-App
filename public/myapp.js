var app = angular.module('studyApp', []);

app.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.test = 'Hello world!';
}]);

var _auth2;
var client_id = "73713153185-ml2ui4qa12p4tpfgiuhgebpsi374gnqc.apps.googleusercontent.com";
//set CLient ID and google auth settings
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

  var verifier = require('google-id-token-verifier');

  verifier.verify(id_token, clientId, function (err, tokenInfo) {
    if (!err) {
      // use tokenInfo in here.
      var userID = tokenInfo['sub']
      console.log(userID);
    }
  });

    //database login
    //post here

  }

//Sign out a user
function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
}

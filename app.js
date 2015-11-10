
var app = angular.module('scheduleApp', ['firebase']);

app.controller('mainController', function ($scope, $firebase) {

    var self = this;

    var database = new Firebase("https://momsmorningscheduler.firebaseio.com/");

    var usersCollection = database.child("users")

    $scope.createUser = function () {
        console.log($scope.createEmail);
        usersCollection.createUser(
            {
          email    : $scope.createEmail,
          password : $scope.createPassword
            },

        function(error, userData) {
          if (error) {
            console.log("Error YO:", error);
          } else {
            console.log("Successfully created user account with uid:", userData.uid);
          }
        });
    };

});

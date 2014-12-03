var myApp = angular.module('myApp', []);

myApp.factory('Data', function() {
    return {message: "I'm data from a service"}
})

function FirstCtrl($scope, Data){
    $scope.data = Data;
}

function SecondCtrl($scope, Data){
    $scope.data = Data;

    $scope.reversedMethod = function (msg) {
        return msg.split("").reverse().join("");
    }
}
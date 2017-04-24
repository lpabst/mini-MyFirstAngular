angular.module('friendsList')
    .controller('mainCtrl', function($scope){
    
$scope.friends = ['Jessica', 'Stephen', 'Clayton'];

$scope.addFriend = function(name){
    $scope.friends.push(name);
};






});
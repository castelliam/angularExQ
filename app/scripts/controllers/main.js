'use strict';

angular.module('angularIntroApp')
  .controller('MainCtrl', function ($scope, $location, teamList) {
 	$scope.teamMembers = teamList.getMembers();
    $scope.addTeamMember = function() {
    	$location.path('/Home');
    	$scope.teamMembers.push(
    		{
    			name: $scope.newPerson.name,
    			position: $scope.newPerson.position

    		});
    	$scope.newPerson.name="";
    	$scope.newPerson.position="";
    	

    };
    $scope.deleteTeamMember = function(newPerson) {
    	$scope.teamMembers.pop(newPerson);

    }

    
  });

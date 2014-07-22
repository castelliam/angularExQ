angular.module('angularIntroApp')
	.factory('teamList', function() {
		var factory = {};
		var teamMembers = [
    	{name:'Rob Hitt', position: 'AngularJS'},
    	{name:'John Doe', position: 'Front-End Developing Enthusaist'},
    	{name:'Jane Doe', position: 'Mobile Developer'}
    	];
    	factory.getMembers = function() {
    		return teamMembers;
    	};
    	return factory;
    });

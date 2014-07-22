angular.module('demoDir.directive') 

	.directive('headerDirective', function(){
		return{
			restrict: 'E',
			templateUrl: 'views/directiveEx.html'
		}
	});
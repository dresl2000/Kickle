module.exports = function(kickleApp) {
	
kickleApp.controller('stepsOverviewController',['$log','$scope','stepsService', function($log,$scope, stepsService){


	function init() {
		$log.log('initializing stepsOverviewController');
		
		$log.log(stepsService.getDice(2));
		$log.log(stepsService.rollStep(4));
		
	};
	
	$scope.getSteps = function() {
		return stepsService.getAllSteps();   
	}
	
	
	init();	
		
}]);

}
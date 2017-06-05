(function(){

kickleApp.controller('stepsOverviewController',['$log','$scope','stepsService', function($log: any,$scope: any, stepsService: any){


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
})();
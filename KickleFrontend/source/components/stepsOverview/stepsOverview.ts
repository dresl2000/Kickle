(function(){

kickleApp.controller('stepsOverviewController',['$log','stepsService', function($log: any, stepsService: any){


	function init() {
		$log.log('initializing stepsOverviewController');
		
		$log.log(stepsService.getDice(2));
		$log.log(stepsService.rollStep(4));
		
	};
	

	init();	
		
}]);
})();
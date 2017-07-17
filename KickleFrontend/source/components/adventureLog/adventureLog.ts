(function(){

kickleApp.controller('adventureLogController', [ '$log','$scope','characterDataService', function($log: any,$scope: any,characterDataService: any){

	$scope.getAdventureLog = function() {
		$log.log('ggeting logs');
		return characterDataService.getAdventureLog();   
	}
  
}]);
})();
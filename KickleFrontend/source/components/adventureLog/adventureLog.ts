(function(){

kickleApp.controller('adventureLogController', [ '$log','$scope','characterDataService', function($log: any,$scope: any,characterDataService: any){

	$scope.getAdventureLog = function() {		
		return characterDataService.getAdventureLog();   
	}
	
	$scope.getNotes = function() {		
		return characterDataService.getNotes();   
	}	
  
}]);
})();
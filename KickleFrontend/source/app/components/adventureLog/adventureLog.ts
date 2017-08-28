module.exports = function(kickleApp) {

kickleApp.controller('adventureLogController', [ '$log','$scope','characterDataService', function($log,$scope,characterDataService){

	$scope.getAdventureLog = function() {		
		return characterDataService.getAdventureLog();   
	}
	
	$scope.getNotes = function() {		
		return characterDataService.getNotes();   
	}	
  
}]);

}
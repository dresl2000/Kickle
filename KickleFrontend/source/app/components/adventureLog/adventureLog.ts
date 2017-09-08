module.exports = function(kickleApp) {

kickleApp.controller('adventureLogController', [ '$log','$scope','characterDataService', function($log,$scope,characterDataService){

	$scope.getAdventureLog = function() {		
	
		let logs = characterDataService.getAdventureLog();
		
		logs = logs.sort( (n1, n2) => { return Date.parse(n1.Date) < Date.parse(n2.Date); });
		
		return logs;	
	}
	
	$scope.getNotes = function() {		
		return characterDataService.getNotes();   
	}	
  
}]);

}
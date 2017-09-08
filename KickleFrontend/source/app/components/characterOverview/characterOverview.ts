module.exports = function(kickleApp) {

kickleApp.controller('characterOverviewController',  function($log,$scope, characterDataService){

	function init(){
		
	}

	$scope.getEquipment = function(){
		return characterDataService.getCharacterData().Characters[0].Equipment;
	};
	
	$scope.getTotalLegendPoints = function() {
		
		return characterDataService.getCharacterData().Characters[0].LegendPoints.Total;		
	};
	
	$scope.getCurrentLegendPoints = function() {
		
		return characterDataService.getCharacterData().Characters[0].LegendPoints.Current;		
	};	
	
	$scope.getLegendStatus = function() {
		
		return characterDataService.getCharacterData().Characters[0].LegendPoints.Status;		
	};	

	$scope.getWallet = function(){
		return characterDataService.getCharacterData().Characters[0].Wallet;
	};
	
	
	$scope.getLanguages = function(){
		return characterDataService.getCharacterData().Characters[0].Languages;
	};
	
	init();
	
});

}
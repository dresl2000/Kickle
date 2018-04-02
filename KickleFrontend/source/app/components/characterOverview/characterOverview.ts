module.exports = function(kickleApp) {

kickleApp.controller('characterOverviewController',  function($log,$scope, characterDataService){

	function init(){
		
	}

	$scope.getEquipment = function(){
		return characterDataService.getEquipment();
	};
	
	$scope.getTotalLegendPoints = function() {
		
		return characterDataService.getLegendPoints().total;		
	};
	
	$scope.getCurrentLegendPoints = function() {
		
		return characterDataService.getLegendPoints().current;		
	};	
	
	$scope.getLegendStatus = function() {
		
		return characterDataService.getLegendPoints().status;		
	};	

	$scope.getWallet = function(){
		return characterDataService.getWallet();
	};
	
	
	$scope.getLanguages = function(){
		return characterDataService.getLanguages();
	};
	
	init();
	
});

}
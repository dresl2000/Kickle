kickleApp.config(function($routeProvider){
	
	$routeProvider
	.when('/',{
	templateUrl : 'components/characterOverview/characterOverview.html',
	 controller  : 'characterOverviewController',
	}) 
	.when('/steps',{
	 templateUrl : 'components/stepsOverview/stepsOverview.html',
	 controller  : 'stepsOverviewController'
	})	
	.when('/spells',{
	 templateUrl : 'components/spells/spells.html',
	 controller  : 'spellsController'
	})	
	.when('/adventure-log',{
	 templateUrl : 'components/adventureLog/adventure-log.html',
	 controller  : 'adventureLogController'
	})	
	.otherwise({redirectTo: '/'});
		
});	

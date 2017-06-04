kickleApp.config(function($routeProvider){
	
	$routeProvider
	.when('/',{
	templateUrl : 'components/characterOverview/characterOverview.html',
	 controller  : 'characterOverviewController',
	})
	.when('/stepsOverview',{
	 templateUrl : 'components/stepsOverview/stepsOverview.html',
	 controller  : 'stepsOverviewController',
	 content: 'zelda' 
	})	
	.otherwise({redirectTo: '/'});
		
});	

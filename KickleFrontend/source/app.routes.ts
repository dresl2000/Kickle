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
	.otherwise({redirectTo: '/'});
		
});	

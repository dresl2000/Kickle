import * as angular from 'angular';
import 'angular-route';

var kickleApp = angular.module('kickleApp', ['ngRoute']);

angular.element(document).ready(function() { 
	
	angular.bootstrap(document.body, ['kickleApp']);
});	



require("./components/adventureLog/adventureLog.ts")(kickleApp);
require("./components/attribute/attribute.ts")(kickleApp);
require("./components/attribute-list/attribute-list.ts")(kickleApp);
require("./components/characterOverview/characterOverview.ts")(kickleApp);
require("./components/characterDescription/characterDescription.ts")(kickleApp);
require("./components/spells/spells.ts")(kickleApp);
require("./components/stepsOverview/stepsOverview.ts")(kickleApp);
require("./components/talent-list/talent-list.ts")(kickleApp);


require("./shared/navbar/navbar.ts")(kickleApp);

require("./service/attributesService.ts")(kickleApp);
require("./service/characterDataService.ts")(kickleApp);
require("./service/characteristicService.ts")(kickleApp);
require("./service/stepsService.ts")(kickleApp);



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

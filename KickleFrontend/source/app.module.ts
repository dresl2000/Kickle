import * as angular from 'angular';
import 'angular-route';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { downgradeComponent } from '@angular/upgrade/static';
import { downgradeInjectable } from '@angular/upgrade/static';

import { KickleModule } from './kickle.module';


var kickleApp = angular.module('kickleApp', ['ngRoute']);


angular.element(document).ready(function() { 
	platformBrowserDynamic().bootstrapModule(KickleModule);	
});	


//downgraded components:
import { TalentListComponent } from './components/talent-list/talent-list.component';

kickleApp.directive(
    'talentList',
    downgradeComponent({ component: TalentListComponent }) as angular.IDirectiveFactory
);  

import { SpellsComponent } from './components/spells/spells.component';

kickleApp.directive(
    'spells',
    downgradeComponent({ component: SpellsComponent }) as angular.IDirectiveFactory
);


//downgraded services:
import {CharacterDataService} from './service/character-data.service';

kickleApp
  .factory('characterDataService', downgradeInjectable(CharacterDataService));
  //.component('heroDetail', heroDetailComponent);




require("./components/adventureLog/adventureLog.ts")(kickleApp);
require("./components/attribute/attribute.ts")(kickleApp);
require("./components/attribute-list/attribute-list.ts")(kickleApp);
require("./components/characterOverview/characterOverview.ts")(kickleApp);
require("./components/characterDescription/characterDescription.ts")(kickleApp);
require("./components/stepsOverview/stepsOverview.ts")(kickleApp);


require("./shared/navbar/navbar.ts")(kickleApp);

require("./service/attributesService.ts")(kickleApp);
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

import * as angular from 'angular';
import 'angular-ui-router';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { downgradeComponent } from '@angular/upgrade/static';
import { downgradeInjectable } from '@angular/upgrade/static';

import { KickleModule } from './kickle.module';

var kickleApp = angular.module('kickleApp',['ui.router']);

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

import { DiceBoardComponent } from './components/dice-board/dice-board.component';
kickleApp.directive(
    'diceBoard',
    downgradeComponent({ component: DiceBoardComponent }) as angular.IDirectiveFactory
);

import { KarmaComponent } from './components/karma/karma.component';
kickleApp.directive(
    'karma',
    downgradeComponent({ component: KarmaComponent }) as angular.IDirectiveFactory
);

import { AdventureWidgetComponent } from './components/adventure-widget/adventure-widget.component';
kickleApp.directive(
    'adventureWidget',
    downgradeComponent({ component: AdventureWidgetComponent }) as angular.IDirectiveFactory
);

import { SkillListComponent } from './components/skill-list/skill-list.component';
kickleApp.directive(
    'skillList',
    downgradeComponent({ component: SkillListComponent }) as angular.IDirectiveFactory
);

import { StepsOverviewComponent } from './components/steps-overview/steps-overview.component';
kickleApp.directive(
    'stepsOverview',
    downgradeComponent({ component: StepsOverviewComponent }) as angular.IDirectiveFactory
);

import { BuildingYourLegendOverviewComponent } from './components/building-your-legend/building-your-legend-overview/building-your-legend-overview.component';
kickleApp.directive(
    'buildingYourLegendOverview',
    downgradeComponent({ component: BuildingYourLegendOverviewComponent }) as angular.IDirectiveFactory
);




//downgraded services:
import {CharacterDataService} from './service/character-data.service';
kickleApp
  .factory('characterDataService', downgradeInjectable(CharacterDataService));

  
import {StepsService} from './service/steps.service';
kickleApp
  .factory('stepsService', downgradeInjectable(StepsService));
  

import {AttributeService} from './service/attribute.service';
kickleApp
  .factory('attributesService', downgradeInjectable(AttributeService));
  

require("./components/adventureLog/adventureLog.ts")(kickleApp);
require("./components/attribute/attribute.ts")(kickleApp);
require("./components/attribute-list/attribute-list.ts")(kickleApp);
require("./components/characterOverview/characterOverview.ts")(kickleApp);
require("./components/characterDescription/characterDescription.ts")(kickleApp);


require("./shared/navbar/navbar.ts")(kickleApp);



kickleApp.config(['$stateProvider', function ($stateProvider) {
        var characterOverview = {
                name: 'characterOverview',
                url: '/',
				templateUrl : 'app/components/characterOverview/characterOverview.html',
				controller  : 'characterOverviewController'
            },
            steps = {
                name: 'steps',
                url: '/steps',
				component : 'stepsOverview'
            },			
            spells = {
                name: 'spells',
                url: '/spells',
				component  : 'spells'
            },
            adventureLog = {
                name: 'adventureLog',
                url: '/adventure-log',
				templateUrl : 'app/components/adventureLog/adventure-log.html',
				controller  : 'adventureLogController'
            },
            rulesOverview = {
                name: 'buildingYourLegendOverview',
                url: '/building-your-legend',
				component  : 'buildingYourLegendOverview'
            };

        $stateProvider.state(characterOverview);
        $stateProvider.state(steps);
        $stateProvider.state(spells);
        $stateProvider.state(adventureLog);
		$stateProvider.state(rulesOverview);
}]);


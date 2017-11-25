import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { FormsModule } from '@angular/forms';

//import {RouterModule,Routes} from '@angular/router';

//import {kickleRoutes} from './kickle.routes';

//Components
import { TalentListComponent } from './components/talent-list/talent-list.component';
import { SpellsComponent } from './components/spells/spells.component';
import { NavbarDirective } from './components/navbar/navbar.component';
import { TalentComponent } from './components/talent/talent.component';
import { DiceDirective } from './directives/dice/dice.directive';
import { DiceBoardComponent } from './components/dice-board/dice-board.component';
import { KarmaComponent } from './components/karma/karma.component';
import { AdventureWidgetComponent } from './components/adventure-widget/adventure-widget.component';
import { SkillListComponent } from './components/skill-list/skill-list.component';
import { StepsOverviewComponent } from './components/steps-overview/steps-overview.component';
import { BuildingYourLegendOverviewComponent } from './components/building-your-legend/building-your-legend-overview/building-your-legend-overview.component';
import { TalentRankCostTableComponent } from './components/building-your-legend/talent-rank-cost-table/talent-rank-cost-table.component';
import { AttributeRankCostTableComponent } from './components/building-your-legend/attribute-rank-cost-table/attribute-rank-cost-table.component';
import { SkillRankCostTableComponent } from './components/building-your-legend/skill-rank-cost-table/skill-rank-cost-table.component';
import { CircleAdvancementTableComponent } from './components/building-your-legend/circle-advancement-table/circle-advancement-table.component';
import { CombatMainComponent } from './components/combat/combat-main/combat-main.component';


import { AttributeComponent } from './components/attribute/attribute.component';
import { AttributeListComponent } from './components/attribute-list/attribute-list.component';

//Services
import {CharacterDataService} from './service/character-data.service';
import {StepsService} from './service/steps.service';
import {TalentService} from './service/talent.service';
import {AttributeService} from './service/attribute.service';
import {CharacteristicService} from './service/characteristic.service';
import {DiceRollService} from './service/dice-roll.service';
import {BuildingYourLegendService} from './service/building-your-legend.service';


@NgModule({
  imports: [
    BrowserModule,
		UpgradeModule,
		FormsModule//,
	//RouterModule.forRoot(kickleRoutes)
  ],
  providers: [
	CharacterDataService, 
	StepsService,
	TalentService,
	AttributeService,
	CharacteristicService,
	DiceRollService,
	BuildingYourLegendService
  ],
  declarations: [
    TalentListComponent,
	SpellsComponent,
	NavbarDirective,
	TalentComponent,
	DiceDirective,
	DiceBoardComponent,
	KarmaComponent,
	AdventureWidgetComponent,
	SkillListComponent,
	StepsOverviewComponent,
	BuildingYourLegendOverviewComponent,
	TalentRankCostTableComponent,
	AttributeRankCostTableComponent,
	SkillRankCostTableComponent,
	CircleAdvancementTableComponent,
	AttributeListComponent,
	AttributeComponent,
	CombatMainComponent
  ],
  entryComponents: [
	SpellsComponent,
	TalentListComponent,
	DiceBoardComponent,
	KarmaComponent,
	AdventureWidgetComponent,
	SkillListComponent,
	StepsOverviewComponent,
	BuildingYourLegendOverviewComponent,
	AttributeListComponent,
	CombatMainComponent
  ]
})

export class KickleModule {
  constructor(private upgrade: UpgradeModule) { }
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, ['kickleApp']);
  }
}
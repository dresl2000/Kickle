import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';

//import {RouterModule,Routes} from '@angular/router';

//import {kickleRoutes} from './kickle.routes';

//Components
import { TalentListComponent } from './components/talent-list/talent-list.component';
import { SpellsComponent } from './components/spells/spells.component';
import { NavbarDirective } from './components/navbar/navbar.component';
import { TalentComponent } from './components/talent/talent.component';
import { DiceDirective } from './directives/dice/dice.directive';
import { DiceBoardComponent } from './components/dice-board/dice-board.component';

//Services
import {CharacterDataService} from './service/character-data.service';
import {StepsService} from './service/steps.service';
import {TalentService} from './service/talent.service';
import {AttributeService} from './service/attribute.service';
import {CharacteristicService} from './service/characteristic.service';
import {DiceRollService} from './service/dice-roll.service';


@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule//,
	//RouterModule.forRoot(kickleRoutes)
  ],
  providers: [
	CharacterDataService, 
	StepsService,
	TalentService,
	AttributeService,
	CharacteristicService,
	DiceRollService
  ],
  declarations: [
    TalentListComponent,
	SpellsComponent,
	NavbarDirective,
	TalentComponent,
	DiceDirective,
	DiceBoardComponent
  ],
  entryComponents: [
	SpellsComponent,
	TalentListComponent,
	DiceBoardComponent
  ]
})

export class KickleModule {
  constructor(private upgrade: UpgradeModule) { }
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, ['kickleApp']);
  }
}
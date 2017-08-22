import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';

import { TalentListComponent } from './components/talent-list/talent-list.component';
import { SpellsComponent } from './components/spells/spells.component';
import { NavbarDirective } from './components/navbar/navbar.component';

import {CharacterDataService} from './service/character-data.service';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  providers: [
	CharacterDataService
  ],
  declarations: [
    TalentListComponent,SpellsComponent,NavbarDirective
  ],
  entryComponents: [
    TalentListComponent,SpellsComponent
  ]
})

export class KickleModule {
  constructor(private upgrade: UpgradeModule) { }
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, ['kickleApp']);
  }
}
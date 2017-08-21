import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';

import { TalentListComponent } from './components/talent-list/talent-list.component';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  declarations: [
    TalentListComponent
  ],
  entryComponents: [
    TalentListComponent
  ]
})

export class KickleModule {
  constructor(private upgrade: UpgradeModule) { }
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, ['kickleApp']);
  }
}
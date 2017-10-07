import {RouterModule,Routes} from '@angular/router';
import { SpellsComponent } from './components/spells/spells.component';
import { RulesOverviewComponent } from './components/rules-overview/rules-overview.component';

export const kickleRoutes: Routes = [
  { path: 'spells', component: SpellsComponent },
  { path: 'rules-overview', component: RulesOverviewComponent }
];



import {RouterModule,Routes} from '@angular/router';
import { SpellsComponent } from './components/spells/spells.component';
import { BuildingYourLegendOverviewComponent } from './components/building-your-legend/building-your-legend-overview/building-your-legend-overview.component';

export const kickleRoutes: Routes = [
  { path: 'spells', component: SpellsComponent },
  { path: 'building-your-legend', component: BuildingYourLegendOverviewComponent }
];



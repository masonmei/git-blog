import { Routes, RouterModule } from '@angular/router';

import { PersonListComponent } from './component/person-list/person-list.component';
import { PersonDetailsComponent } from './component/person-details/person-details.component';

// Route config let's you map routes to components
const routes: Routes = [
  // map '/persons' to the people list component
  {
    path: 'persons',
    component: PersonListComponent,
  },
  // map '/persons/:id' to person details component
  {
    path: 'persons/:id',
    component: PersonDetailsComponent
  },
  // map '/' to '/persons' as our default route
  {
    path: '',
    redirectTo: '/persons',
    pathMatch: 'full'
  },
];

export const routing = RouterModule.forRoot(routes);

import { Routes } from '@angular/router';
import { ResourcesComponent } from './resources/resources.component';
import { canMatchFeature } from '@shared';
import { HomeComponent } from './pages/home.component';

export const routes: Routes = [
  {
    path: 'resources',
    loadChildren: () =>
      import('./resources/resources.routes').then((r) => r.RESOURCE_ROUTES),
  },
  {
    path: 'demos',
    data: {
      preload: true,
    },
    loadChildren: () =>
      import('./demos/demos.routes').then((r) => r.DEMO_ROUTES), // dynamic import
  },

  {
    path: 'golf',
    canMatch: [canMatchFeature('golf')],
    loadChildren: () => import('./golf/golf.routes').then((r) => r.GOLF_ROUTES),
  },
  {
    path: 'jeff-counter',
    data: {
      preload: true,
    },
    loadChildren: () =>
      import('./jeff-counter/counter.routes').then((r) => r.COUNTER_ROUTES),
  },
  {
    path: 'books',
    data: {
      preload: true,
    },
    loadChildren: () =>
      import('./books/books.routes').then((r) => r.BOOK_ROUTES),
  },
  {
    path: 'counter',
    loadChildren: () =>
      import('./counter-lab/counter-lab-routes').then(
        (r) => r.COUNTER_LAB_ROUTES,
      ),
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

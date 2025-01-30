import { Routes } from '@angular/router';
import { CounterLabComponent } from './counter-lab.component';
import { PrefsLabComponent } from './pages/prefs-lab.component';
import { CounterLabUiComponent } from './pages/counter-lab.component';
import { PrefsStore } from './services/prefs-lab.store';
export const COUNTER_LAB_ROUTES: Routes = [
  {
    path: '',
    providers: [PrefsStore],
    component: CounterLabComponent,
    children: [
      {
        path: 'lab-ui',
        component: CounterLabUiComponent,
      },
      {
        path: 'prefs',
        component: PrefsLabComponent,
      },
    ],
  },
];

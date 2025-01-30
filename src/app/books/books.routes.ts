import { Routes } from '@angular/router';
import { BooksComponent } from './books.component';
import { BookTableComponent } from './components/book-table';
import { BookStatisticsComponent } from './components/book-statistics';
export const BOOK_ROUTES: Routes = [
  {
    path: '',
    component: BooksComponent,
    children: [
      {
        path: 'book-table',
        component: BookTableComponent,
      },
      {
        path: 'book-statistics',
        component: BookStatisticsComponent,
      },
      {
        path: '**',
        component: BookTableComponent,
      },
    ],
  },
];

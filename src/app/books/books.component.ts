import { JsonPipe } from '@angular/common';
import { Component, ChangeDetectionStrategy, resource } from '@angular/core';
import { BookEntity } from './book.entity';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-books',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div>
      <div class="flex gap-4">
        <a routerLink="book-table" class="link">Table</a>
        <a routerLink="book-statistics" class="link">Statistics</a>
      </div>
      <router-outlet />
    </div>
  `,
  styles: ``,
})
export class BooksComponent {}

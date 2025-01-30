import {
  Component,
  ChangeDetectionStrategy,
  resource,
  computed,
  signal,
} from '@angular/core';
import { BookEntity } from '../book.entity';

@Component({
  selector: 'app-book-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: ` <div class="overflow-x-auto">
    <table class="table table-zebra">
      <!-- head -->
      <thead>
        <tr>
          <th>Id</th>
          <th (click)="sortBooks()">Title</th>
          <th>Author</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        @for (item of books.value(); track item.id) {
          <tr>
            <th>{{ item.id }}</th>
            <td>{{ item.title }}</td>
            <td>{{ item.author }}</td>
            <td>{{ item.year }}</td>
          </tr>
        }
      </tbody>
    </table>
  </div>`,
  styles: ``,
})
export class BookTableComponent {
  currentDirection: number = 0;

  books = resource({
    loader: () =>
      fetch('./api/books')
        .then((b) => b.json())
        .then((r) => r.data),
  });

  sortBooks() {
    if (this.currentDirection == 0) {
      this.books
        .value()
        .sort((a: BookEntity, b: BookEntity) => a.title.localeCompare(b.title));
      this.currentDirection = 1;
    } else {
      this.books
        .value()
        .sort((a: BookEntity, b: BookEntity) => b.title.localeCompare(a.title));
      this.currentDirection = 0;
    }
  }
}

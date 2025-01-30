import {
  Component,
  ChangeDetectionStrategy,
  resource,
  signal,
  computed,
} from '@angular/core';
import { BookEntity } from '../book.entity';

@Component({
  selector: 'app-book-statistics',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `<table class="table table-zebra">
    <!-- head -->
    <thead>
      <tr>
        <th>Total Number of Books</th>
        <th>Oldest Book</th>
        <th>Newest Book</th>
        <th>Average Number of Pages per Book</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>{{ bookCount() }}</th>
        <td>{{ oldestBook() }}</td>
        <td>{{ newestBook() }}</td>
        <td>{{ averagePages() }}</td>
      </tr>
    </tbody>
  </table>`,
  styles: ``,
})
export class BookStatisticsComponent {
  books = resource({
    loader: () =>
      fetch('./api/books')
        .then((b) => b.json())
        .then((x) => x.data),
  });

  bookCount = computed(() => this.books.value().length);

  oldestBook = computed(() => {
    return this.books
      .value()
      .sort((a: BookEntity, b: BookEntity) => a.year - b.year)[0].year;
  });

  newestBook = computed(() => {
    return this.books
      .value()
      .sort((a: BookEntity, b: BookEntity) => b.year - a.year)[0].year;
  });

  averagePages = computed(() => {
    const totalPages = this.books
      .value()
      .reduce((x: number, y: BookEntity) => x + y.pages, 0);
    return totalPages / this.bookCount();
  });
}

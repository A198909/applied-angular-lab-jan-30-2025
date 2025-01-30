import {
  Component,
  ChangeDetectionStrategy,
  signal,
  computed,
  inject,
} from '@angular/core';
import { PrefsStore } from '../services/prefs-lab.store';

@Component({
  selector: 'app-ui',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div>
      <button
        [disabled]="store.canDecrementCounter()"
        (click)="store.decreaseCounter()"
        class="btn btn-primary"
      >
        -
      </button>
      <span data="current"> {{ store.counter() }}</span>
      <button (click)="store.increaseCounter()" class="btn btn-primary">
        +
      </button>

      <span data="fizzBuzz"> {{ store.checkFizzBuzz() }}</span>
      <div class="flex">
        <p>Current Preference:</p>
        <span data="currentPref"> {{ store.prefsCounter() }} </span>
      </div>
    </div>
  `,
  styles: ``,
})
export class CounterLabUiComponent {
  store = inject(PrefsStore);
  counter = signal(0);
  fizzBuzzWord = signal('');

  //   increaseCounter() {
  //     this.counter.update((c) => c + 1);
  //     this.checkFizzBuzz();
  //   }

  //   decreaseCounter() {
  //     this.counter.update((c) => c - 1);
  //     this.checkFizzBuzz();
  //   }

  // canDecrementCounter = computed(() => this.counter() === 0);

  checkFizzBuzz() {
    if (this.store.counter() % 3 === 0 && this.store.counter() % 5 === 0) {
      this.fizzBuzzWord.update((s) => (s = 'FizzBuzz'));
    } else if (this.store.counter() % 5 === 0) {
      this.fizzBuzzWord.update((s) => (s = 'Buzz'));
    } else if (this.store.counter() % 3 === 0) {
      this.fizzBuzzWord.update((s) => (s = 'Fizz'));
    } else {
      this.fizzBuzzWord.update((s) => (s = 'nothing'));
    }
  }
}

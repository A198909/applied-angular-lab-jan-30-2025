import { computed } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';

export const PrefsStore = signalStore(
  withState({
    counter: 0,
    prefsCounter: 0,
  }),
  withMethods((store) => {
    return {
      increaseCounter: () =>
        patchState(store, { counter: store.counter() + store.prefsCounter() }),
      decreaseCounter: () =>
        patchState(store, { counter: store.counter() - store.prefsCounter() }),
      changePrefs: (selectedValue: number) =>
        patchState(store, { prefsCounter: selectedValue }),
    };
  }),
  withComputed((store) => {
    return {
      canDecrementCounter: computed(
        () =>
          store.counter() === 0 || store.counter() - store.prefsCounter() < 0,
      ),
      checkFizzBuzz: computed(() => {
        if (store.counter() === 0) {
          return '';
        } else if (store.counter() % 3 === 0 && store.counter() % 5 === 0) {
          return 'FizzBuzz';
        } else if (store.counter() % 5 === 0) {
          return 'Buzz';
        } else if (store.counter() % 3 === 0) {
          return 'Fizz';
        } else {
          return '';
        }
      }),
    };
  }),
);

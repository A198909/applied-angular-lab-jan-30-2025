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
    };
  }),
);

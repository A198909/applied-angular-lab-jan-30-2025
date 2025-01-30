import {
  Component,
  ChangeDetectionStrategy,
  signal,
  inject,
} from '@angular/core';
import { PrefsStore } from '../services/prefs-lab.store';

@Component({
  selector: 'app-prefs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `<div>Prefs Component Goes Here!</div>
    <div class="form-control">
      <label class="label cursor-pointer">
        <span class="label-text">Increase Count By 1</span>
        <input
          type="radio"
          name="radio-10"
          class="radio checked:bg-red-500"
          (change)="onRadioButtonChange(1)"
        />
      </label>
    </div>
    <div class="form-control">
      <label class="label cursor-pointer">
        <span class="label-text">Increase Count By 3</span>
        <input
          type="radio"
          name="radio-10"
          class="radio checked:bg-blue-500"
          (change)="onRadioButtonChange(3)"
        />
      </label>
    </div>
    <div class="form-control">
      <label class="label cursor-pointer">
        <span class="label-text">Increase Count By 5</span>
        <input
          type="radio"
          name="radio-10"
          class="radio checked:bg-green-500"
          (change)="onRadioButtonChange(5)"
        />
      </label>
    </div>`,
  styles: ``,
})
export class PrefsLabComponent {
  store = inject(PrefsStore);

  onRadioButtonChange(selectedValue: number) {
    this.store.changePrefs(selectedValue);
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.scss'],
})
export class SwitcherComponent {
  @Output()
  stateChanged = new EventEmitter();

  switcherOn = false;

  onClick() {
    this.switcherOn = !this.switcherOn;

    this.stateChanged.emit(this.switcherOn);
  }
}

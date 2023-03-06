import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  switcherOn = false;
  secondswitcherOn = false;
  onSwitcherStateChange(switcherOn: boolean) {
    this.switcherOn = switcherOn;
  }
  onSwitcherchange(secondswitcherOn: boolean) {
    this.secondswitcherOn = secondswitcherOn;
  }
}

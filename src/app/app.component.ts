import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  switcherOn = false;

  onSwitcherStateChange(switcherOn: boolean) {
    this.switcherOn = switcherOn;
  }
}

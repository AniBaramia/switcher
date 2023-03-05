import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bulb',
  templateUrl: './bulb.component.html',
  styleUrls: ['./bulb.component.scss'],
})
export class BulbComponent {
  @Input()
  on = false;
}

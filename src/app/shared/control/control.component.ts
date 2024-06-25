import { Component, Host, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None, // added the control class to <app-control> as un alternative to :host 
  host: {
    class:"control"
  }
})
export class ControlComponent {
  label = input<string>()
}

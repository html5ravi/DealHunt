import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  template: `
    <div class="wrapper unselectable" [ngClass]="{ active: active }">
      <ng-content></ng-content>
      
    </div>
  `,
})
export class TabComponent {
  @Input() active: boolean = false;
}
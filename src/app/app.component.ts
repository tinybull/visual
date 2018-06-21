import {Component} from '@angular/core';
import {TestComponent} from './test.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  panels = [
    {
      component: TestComponent,
      data: {}
    },
    {
      component: TestComponent,
      data: {}
    }
  ];

}

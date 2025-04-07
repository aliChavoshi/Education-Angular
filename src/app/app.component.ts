import { Component } from '@angular/core';
import { AlertComponent } from './alert/alert.component';

@Component({
  selector: 'app-root',
  imports: [AlertComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
})
export class AppComponent {
  title = 'angular-standalone-components';
}

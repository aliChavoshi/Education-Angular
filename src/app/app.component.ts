import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule, CardComponent],
  templateUrl: './app.component.html',
  // template: `<app-card />`,
  // styleUrl: './app.component.css',
  standalone: true,
})
export class AppComponent {
  myCourses = ['C#', 'Angular', 'CSS'];
}

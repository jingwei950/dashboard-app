import { Component } from '@angular/core';
import { MainComponent } from './core/main/main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [MainComponent],
})
export class AppComponent {
  title = 'dashboard-app';
}

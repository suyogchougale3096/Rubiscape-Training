import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HnavigationbarComponent } from './components/hnavigationbar/hnavigationbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HnavigationbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'rubiscapepage';
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateTokenComponent } from './pages/create-token/create-token.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'aware-demo-frontend';
}

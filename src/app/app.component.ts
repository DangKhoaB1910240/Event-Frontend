import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CommonModule]
})
export class AppComponent {
  title = 'event-frontend';
}

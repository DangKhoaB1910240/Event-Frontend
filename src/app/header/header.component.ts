import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Route, Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
[x: string]: any;
  constructor(private router: Router){}
  ngOnInit(): void {
      
  }
  isRouteActive(route: string): boolean {
    return this.router.url === route;
  }

}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { NavigationEnd, Router } from '@angular/router';

@Component({
    selector: 'app-nha-to-chuc',
    standalone: true,
    templateUrl: './nha-to-chuc.component.html',
    styleUrl: './nha-to-chuc.component.css',
    imports: [HeaderComponent, FooterComponent],
    encapsulation: ViewEncapsulation.None
})
export class NhaToChucComponent implements OnInit {
    constructor(private router: Router){}
    ngOnInit(): void {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
              // Scroll lên đầu trang khi route thay đổi
              window.scrollTo(0, 0);
            }
          });
    }
    
}

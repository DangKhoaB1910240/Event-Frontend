import { Component, ViewEncapsulation } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-trang-chu',
    standalone: true,
    templateUrl: './trang-chu.component.html',
    styleUrl: './trang-chu.component.css',
    encapsulation: ViewEncapsulation.None,
    imports: [HeaderComponent, FooterComponent]
})
export class TrangChuComponent {

}

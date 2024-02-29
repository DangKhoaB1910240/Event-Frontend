import { Component, ViewEncapsulation } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-gioi-thieu',
  standalone: true,
  imports: [FooterComponent,HeaderComponent],
  templateUrl: './gioi-thieu.component.html',
  styleUrl: './gioi-thieu.component.css',
  encapsulation: ViewEncapsulation.None
})
export class GioiThieuComponent {

}

import { Component } from '@angular/core';

import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { ContentComponent } from "../content/content.component";

@Component({
  selector: 'app-frontpage',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, ContentComponent],
  templateUrl: './frontpage.component.html',
  styleUrl: './frontpage.component.scss'
})
export class FrontpageComponent {

}

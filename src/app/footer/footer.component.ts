import { Component } from '@angular/core';
import { FooterLinksComponent } from './footer-links/footer-links.component';
import { FooterIconsComponent } from "./footer-icons/footer-icons.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FooterLinksComponent, FooterIconsComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}

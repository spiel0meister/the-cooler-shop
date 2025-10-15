import { Component } from '@angular/core';
import { NavbarButtonsComponent } from "./navbar-buttons/navbar-buttons.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NavbarButtonsComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}

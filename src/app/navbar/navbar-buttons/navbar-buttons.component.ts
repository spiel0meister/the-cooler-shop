import { Component } from '@angular/core';
import { Button } from '../../models/button.model';

@Component({
  selector: 'app-navbar-buttons',
  standalone: true,
  imports: [],
  templateUrl: './navbar-buttons.component.html',
  styleUrl: './navbar-buttons.component.scss'
})
export class NavbarButtonsComponent {
  login: Button = {
    label: "Log in",
    faIcon: "fa-solid fa-user",
    onClick() {
      window.location.href = "/login";
    }
  };
  signup: Button = {
    label: "Sign up",
    faIcon: "fa-solid fa-user",
    onClick() {
      window.location.href = "/signup";
    }
  };
}

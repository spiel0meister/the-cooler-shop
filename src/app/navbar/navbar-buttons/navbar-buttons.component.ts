import { Component, Inject, inject } from '@angular/core';
import { Button } from '../../models/button.model';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-navbar-buttons',
  standalone: true,
  imports: [],
  templateUrl: './navbar-buttons.component.html',
  styleUrl: './navbar-buttons.component.scss'
})
export class NavbarButtonsComponent {
  constructor(private api: ApiService) {}

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

  logout: Button = {
    label: "Log out",
    faIcon: "fa-solid fa-user",
    onClick: () => {
      this.api.logout();
    }
  };
}

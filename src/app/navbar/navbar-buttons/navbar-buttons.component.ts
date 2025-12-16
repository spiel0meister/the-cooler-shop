import { Component, Inject, inject } from '@angular/core';
import { Button } from '../../models/button.model';
import { ApiService } from '../../api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar-buttons',
  standalone: true,
  imports: [],
  templateUrl: './navbar-buttons.component.html',
  styleUrl: './navbar-buttons.component.scss'
})
export class NavbarButtonsComponent {
  @Inject(HttpClient) http: HttpClient = inject(HttpClient);

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
      (new ApiService(this.http)).test();
    }
  };
}

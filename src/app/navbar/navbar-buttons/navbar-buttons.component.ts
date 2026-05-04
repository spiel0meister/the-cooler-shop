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

  public constructor(public apiService: ApiService) { }
  private isLoggedIn = false;

  ngOnInit() {
    this.apiService.isLoggedIn.subscribe(loggedIn => {
      this.isLoggedIn = loggedIn;
    });
  }

  buttons: Button[] = [
    {
      label: "Log in",
      id: "login",
      faIcon: "fa-solid fa-user",
      condition: () => !this.isLoggedIn,
      onClick() {
        window.location.href = "/login";
      }
    },
    {
      label: "Sign up",
      id: "signup",
      faIcon: "fa-solid fa-user",
      condition: () => !this.isLoggedIn,
      onClick() {
        window.location.href = "/signup";
      }
    },
    {
      label: "Log out",
      id: "logut",
      faIcon: "fa-solid fa-user",
      condition: () => this.isLoggedIn,
      onClick: () => {
        this.apiService.logout();
      },
    },
  ];
}

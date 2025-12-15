import { Component, inject, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {

  @Inject(HttpClient) http: HttpClient = inject(HttpClient);

  submit() {
    const email_ele: HTMLInputElement = document.querySelector("#email")!;
    const password_ele: HTMLInputElement = document.querySelector("#password")!;

    const email = email_ele.value;
    const password = password_ele.value;

    const api = new ApiService(this.http);
    api.login(email, password);
  }
}

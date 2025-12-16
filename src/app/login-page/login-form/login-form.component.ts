import { Component, inject, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  @Inject(HttpClient) http: HttpClient = inject(HttpClient);

  emailMissing: boolean = false;
  passwordMissing: boolean = false;

  submit() {
    const email_ele: HTMLInputElement = document.querySelector("#email")!;
    const password_ele: HTMLInputElement = document.querySelector("#password")!;

    const email = email_ele.value;
    this.emailMissing = email == "";

    const password = password_ele.value;
    this.passwordMissing = email == "";

    if (this.emailMissing || this.passwordMissing) return;

    const api = new ApiService(this.http);
    api.login(email, password);
  }
}

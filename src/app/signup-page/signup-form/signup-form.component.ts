import { Component, Inject, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.scss'
})
export class SignupFormComponent {
  @Inject(HttpClient) http: HttpClient = inject(HttpClient);

  nameMissing: boolean = false;
  surnameMissing: boolean = false;
  emailMissing: boolean = false;
  passwordMissing: boolean = false;
  passwordRepeatMissing: boolean = false;

  passwordsMatch: boolean = true;

  private getValueFromId(idSelector: string): string {
    return (document.querySelector(idSelector)! as HTMLInputElement).value;
  }

  private isValid(): boolean {
    return this.passwordsMatch && !this.nameMissing && !this.surnameMissing && !this.emailMissing && !this.passwordMissing && !this.passwordRepeatMissing;
  }

  submit() {
    const name = this.getValueFromId("#name");
    if (name == "") this.nameMissing = true;
    else this.nameMissing = false;

    const surname = this.getValueFromId("#surname");
    if (surname == "") this.surnameMissing = true;
    else this.surnameMissing = false;

    const email = this.getValueFromId("#email");
    if (email == "") this.emailMissing = true;
    else this.emailMissing = false;

    const password = this.getValueFromId("#password");
    if (password == "") this.passwordMissing = true;
    else this.passwordMissing = false;

    const passwordRepeat = this.getValueFromId("#password-repeat");
    if (passwordRepeat == "") this.passwordRepeatMissing = true;
    else this.passwordRepeatMissing = false;

    if (password != passwordRepeat) this.passwordsMatch = false;
    else this.passwordsMatch = true;

    if (!this.isValid()) return;

    const api = new ApiService(this.http);
    api.signup(name, surname, email, password);
  }
}

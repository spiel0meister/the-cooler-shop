import { Component, Inject, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.scss'
})
export class SignupFormComponent {
  @Inject(HttpClient) http: HttpClient = inject(HttpClient);

  private getValueFromId(idSelector: string): string {
    return (document.querySelector(idSelector)! as HTMLInputElement).value;
  }

  submit() {
    const name = this.getValueFromId("#name");
    const surname = this.getValueFromId("#surname");
    const email = this.getValueFromId("#email");
    const password = this.getValueFromId("#password");
    const passwordRepeat = this.getValueFromId("#password-repeat");

    console.log({
      name,
      surname,
      email,
      password,
      passwordRepeat,
    })

    const api = new ApiService(this.http);
  }
}

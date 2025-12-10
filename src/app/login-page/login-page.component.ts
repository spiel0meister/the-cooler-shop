import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { LoginFormComponent } from './login-form/login-form.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, LoginFormComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

}

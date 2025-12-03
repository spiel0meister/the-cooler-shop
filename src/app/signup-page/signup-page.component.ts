import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { SignupFormComponent } from "./signup-form/signup-form.component";

@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [FooterComponent, NavbarComponent, SignupFormComponent],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.scss'
})
export class SignupPageComponent {

}

import { Component } from '@angular/core';
import { FormInputComponent } from '../../form-elements/form-input/form-input.component';

@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [FormInputComponent],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.scss'
})
export class SignupFormComponent {

}

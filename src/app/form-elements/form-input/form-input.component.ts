import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-form-input',
  standalone: true,
  imports: [],
  templateUrl: './form-input.component.html',
  styleUrl: './form-input.component.scss'
})
export class FormInputComponent {
  @Input() type: string = "text";

  @Input() name: string = "input";
  @Input() nameHuman: string = "Input";
}

import { Component } from '@angular/core';
import { ItemsComponent } from '../items/items.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [ItemsComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

}

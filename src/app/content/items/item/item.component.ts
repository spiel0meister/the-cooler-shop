import { Component, Input } from '@angular/core';
import { Image } from '../../../models/image.model';
import { PLACEHOLDER } from '../items';

let itemCount = 0;

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
    @Input() name: string = "";
    @Input() priceString: string = "";
    @Input() rating: string = "";
    @Input() image: Image = PLACEHOLDER;
    id: number = 0;

    constructor() {
      this.id = itemCount++;
    }
}

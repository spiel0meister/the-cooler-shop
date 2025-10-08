import { Component, Input } from '@angular/core';

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
    id: number = 0;

    constructor() {
      this.id = itemCount++;
    }
}

import { Component } from '@angular/core';
import { ItemComponent } from './item/item.component';
import { items } from "./items";

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [ItemComponent],
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss'
})
export class ItemsComponent {
    items = items;
}

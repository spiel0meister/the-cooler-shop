import { Component } from '@angular/core';

import { Link } from "../../models/link.model";

@Component({
  selector: 'app-footer-links',
  standalone: true,
  imports: [],
  templateUrl: './footer-links.component.html',
  styleUrl: './footer-links.component.scss'
})
export class FooterLinksComponent {
  links: Link[] = [
    {
      "content": "Contact",
      "uri": "#",
    },
    {
      "content": "Terms of Use",
      "uri": "#",
    },
  ]
}

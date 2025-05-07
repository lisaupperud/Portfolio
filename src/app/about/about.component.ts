import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [NgClass],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  isWorkExpanded = false;
  isProgrammingExpanded = false;
  isInterestsExpanded = false;

  shortText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...';
  longText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultricies... hela texten här';
}

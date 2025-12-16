import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { industries } from '../../data/industries.data';

@Component({
  selector: 'app-industries',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './industries.component.html',
  styleUrls: ['./industries.component.scss'],
})
export class IndustriesComponent {
  private title = inject(Title);
  private meta = inject(Meta);

  industries = industries;

  constructor() {
    this.title.setTitle('Industries - Cyrok');
    this.meta.updateTag({
      name: 'description',
      content:
        'See how CYROK supports IT & Software, BFSI, Healthcare, Education, Manufacturing, and Government with secure, scalable technology solutions.',
    });
  }
}

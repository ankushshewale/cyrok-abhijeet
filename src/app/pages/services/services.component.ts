import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { services } from '../../data/services.data';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  private title = inject(Title);
  private meta = inject(Meta);

  services = services;

  constructor() {
    this.title.setTitle('Services - Cyrok');
    this.meta.updateTag({
      name: 'description',
      content:
        'Explore CYROK’s managed IT, AMC & break-fix, infrastructure management, BMS, IT procurement, and custom high-performance PC services.',
    });
  }
}

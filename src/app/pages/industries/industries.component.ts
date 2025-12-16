import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

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

  industries = [
    {
      name: 'IT & Software',
      slug: 'it-software',
      icon: '💼',
      description: 'Reliable, cloud-ready infrastructure for agile development teams.',
      color: 'cyan',
    },
    {
      name: 'BFSI',
      slug: 'bfsi',
      icon: '🏦',
      description: 'Secure, compliant systems for banks, insurers, and fintechs.',
      color: 'cyan',
    },
    {
      name: 'Healthcare',
      slug: 'healthcare',
      icon: '⚕️',
      description: 'Always-on IT for clinical, diagnostic, and admin operations.',
      color: 'cyan',
    },
    {
      name: 'Education',
      slug: 'education',
      icon: '🎓',
      description: 'Digital campus and learning platforms that scale.',
      color: 'cyan',
    },
    {
      name: 'Manufacturing',
      slug: 'manufacturing',
      icon: '🏭',
      description: 'Industry 4.0–ready infrastructure for plants and factories.',
      color: 'cyan',
    },
    {
      name: 'Government',
      slug: 'government',
      icon: '🏛️',
      description: 'High-security IT foundations for public sector workloads.',
      color: 'cyan',
    },
  ];

  constructor() {
    this.title.setTitle('Industries - Cyrok');
    this.meta.updateTag({
      name: 'description',
      content:
        'See how CYROK supports IT & Software, BFSI, Healthcare, Education, Manufacturing, and Government with secure, scalable technology solutions.',
    });
  }
}

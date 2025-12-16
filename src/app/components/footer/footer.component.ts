import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  quickLinks = [
    { label: 'Home', route: '/' },
    { label: 'About', route: '/about' },
    { label: 'Services', route: '/services' },
    { label: 'Contact', route: '/contact' }
  ];

  serviceCategories = [
    { label: 'Managed IT Services', slug: 'managed-it-services' },
    { label: 'Cybersecurity & SOC', slug: 'cybersecurity-solutions' },
    { label: 'Cloud Solutions', slug: 'cloud-solutions' },
    { label: 'Custom PC Building', slug: 'custom-high-performance-pc' }
  ];

  industries = [
    { label: 'IT & Software', slug: 'it-software' },
    { label: 'BFSI', slug: 'bfsi' },
    { label: 'Healthcare', slug: 'healthcare' },
    { label: 'Education', slug: 'education' },
    { label: 'Manufacturing', slug: 'manufacturing' },
    { label: 'Government', slug: 'government' }
  ];

  scrollToTop(): void {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}

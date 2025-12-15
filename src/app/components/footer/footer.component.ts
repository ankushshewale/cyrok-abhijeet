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
    'Managed IT Services',
    'Cybersecurity & SOC',
    'Cloud Solutions',
    'Custom PC Building'
  ];

  industries = [
    'IT & Software',
    'BFSI',
    'Healthcare',
    'Education',
    'Manufacturing',
    'Government'
  ];

  socialLinks = [
    { name: 'LinkedIn', url: '#' },
    { name: 'Twitter', url: '#' },
    { name: 'Facebook', url: '#' },
    { name: 'Instagram', url: '#' }
  ];

  scrollToTop(): void {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  scrollToTopAndPrevent(event: Event): void {
    event.preventDefault();
    this.scrollToTop();
  }
}

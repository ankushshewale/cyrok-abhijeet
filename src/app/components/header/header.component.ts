import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  mobileMenuOpen = signal(false);
  isScrolled = signal(false);

  navigationItems = [
    { label: 'Home', route: '/' },
    { label: 'About', route: '/about' },
    { label: 'Services', route: '/services' },
    { label: 'Solutions', route: '/solutions' },
    { label: 'Products', route: '/products' },
    { label: 'Industries', route: '/industries' },
    { label: 'Contact', route: '/contact' }
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  toggleMobileMenu() {
    this.mobileMenuOpen.update(val => !val);
  }

  closeMobileMenu() {
    this.mobileMenuOpen.set(false);
  }
}

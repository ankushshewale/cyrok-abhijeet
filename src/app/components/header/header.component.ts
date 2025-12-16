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
    { label: 'Home', route: '/', exact: true },
    { label: 'About', route: '/about', exact: true },
    { label: 'Services', route: '/services', exact: true },
    // Keep Solutions active for /solutions and any child detail routes
    { label: 'Solutions', route: '/solutions', exact: false },
    { label: 'Products', route: '/products', exact: true },
    // Keep Industries active for /industries and any child detail routes
    { label: 'Industries', route: '/industries', exact: false },
    { label: 'Contact', route: '/contact', exact: true }
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

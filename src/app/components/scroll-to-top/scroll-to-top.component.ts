import { Component, HostListener } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-scroll-to-top',
  standalone: true,
  imports: [NgIf],
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss']
})
export class ScrollToTopComponent {
  isVisible = false;
  private readonly offset = 300;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (typeof window === 'undefined') {
      return;
    }

    const yOffset =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    this.isVisible = yOffset > this.offset;
  }

  scrollToTop(): void {
    if (typeof window === 'undefined') {
      return;
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}



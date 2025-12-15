import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  productCategories = [
    {
      title: 'Laptops & Desktops',
      icon: '💻',
      description: 'Business-grade computing solutions',
      items: [
        'Business laptops',
        'Office desktops',
        'Workstations'
      ]
    },
    {
      title: 'Custom High-End PCs',
      icon: '🚀',
      description: 'CYROK\'s core offering - Precision-engineered performance systems',
      highlight: true,
      items: [
        'Extreme-performance gaming PCs',
        '4K/8K video editing rigs',
        'VFX & rendering systems',
        'AI/ML compute desktops',
        'Developer workstations'
      ]
    },
    {
      title: 'Accessories',
      icon: '⌨️',
      description: 'Professional hardware and gaming peripherals',
      items: [
        'Keyboards, mice, headphones',
        'Gaming peripherals',
        'Professional hardware add-ons'
      ]
    }
  ];
}

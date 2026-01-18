import { Component, computed, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { serviceDetails, type ServiceDetail } from '../../data/services.data';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.scss'],
})
export class ServiceDetailComponent {
  private route = inject(ActivatedRoute);
  private title = inject(Title);
  private meta = inject(Meta);

  private allServices: ServiceDetail[] = serviceDetails;

  readonly serviceSlug = signal<string | null>(null);

  readonly currentService = computed(() => {
    const slug = this.serviceSlug();
    if (!slug) return undefined;
    return this.allServices.find((s) => s.slug === slug);
  });

  constructor() {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug');
      this.serviceSlug.set(slug);
    });

    effect(() => {
      const service = this.currentService();
      if (service) {
        this.title.setTitle(`${service.title} - Cyrok Services`);
        this.meta.updateTag({
          name: 'description',
          content: service.overview,
        });
      }
    });
  }

  getServiceImage(slug: string): string | null {
    const imageMap: Record<string, string> = {
      'custom-high-performance-pc': '/images/customHighPc.jpeg',
      'managed-it-services': '/images/managedItServices.jpeg',
      'cybersecurity-soc': '/images/CybersecuritySoc.jpeg',
    };
    return imageMap[slug] || null;
  }
}



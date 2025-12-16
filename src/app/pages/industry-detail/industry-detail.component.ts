import { Component, computed, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { industryDetails, type IndustryDetail } from '../../data/industries.data';

@Component({
  selector: 'app-industry-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './industry-detail.component.html',
  styleUrls: ['./industry-detail.component.scss'],
})
export class IndustryDetailComponent {
  private route = inject(ActivatedRoute);
  private title = inject(Title);
  private meta = inject(Meta);

  private allIndustries: IndustryDetail[] = industryDetails;

  readonly industrySlug = signal<string | null>(null);

  readonly currentIndustry = computed(() => {
    const slug = this.industrySlug();
    if (!slug) return undefined;
    return this.allIndustries.find((i) => i.slug === slug);
  });

  constructor() {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug');
      this.industrySlug.set(slug);
    });

    effect(() => {
      const industry = this.currentIndustry();
      if (industry) {
        this.title.setTitle(`${industry.name} - Cyrok Industries`);
        this.meta.updateTag({
          name: 'description',
          content: industry.shortDescription,
        });
      }
    });
  }
}



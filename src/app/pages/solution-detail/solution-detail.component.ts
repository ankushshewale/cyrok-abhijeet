import { Component, computed, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { solutionDetails, type SolutionDetail } from '../../data/solutions.data';

@Component({
  selector: 'app-solution-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './solution-detail.component.html',
  styleUrls: ['./solution-detail.component.scss'],
})
export class SolutionDetailComponent {
  private route = inject(ActivatedRoute);
  private title = inject(Title);
  private meta = inject(Meta);

  private allSolutions: SolutionDetail[] = solutionDetails;

  readonly solutionSlug = signal<string | null>(null);

  readonly currentSolution = computed(() => {
    const slug = this.solutionSlug();
    if (!slug) return undefined;
    return this.allSolutions.find((s) => s.slug === slug);
  });

  constructor() {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug');
      this.solutionSlug.set(slug);
    });

    effect(() => {
      const solution = this.currentSolution();
      if (solution) {
        this.title.setTitle(`${solution.title} - Cyrok Solutions`);
        this.meta.updateTag({
          name: 'description',
          content: solution.overview,
        });
      }
    });
  }

  getSolutionImage(slug: string): string | null {
    const imageMap: Record<string, string> = {
      'cybersecurity-solutions': '/images/CybersecuritySoc.jpeg',
      'cloud-solutions': '/images/managedItServices.jpeg',
    };
    return imageMap[slug] || null;
  }
}



import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { solutions } from '../../data/solutions.data';

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss']
})
export class SolutionsComponent {
  private title = inject(Title);
  private meta = inject(Meta);

  solutions = solutions;

  constructor() {
    this.title.setTitle('Solutions - Cyrok');
    this.meta.updateTag({
      name: 'description',
      content:
        "Discover CYROK's technology solutions across servers, networks, cloud, storage, cybersecurity, AV, surveillance, and IT rentals.",
    });
  }
}

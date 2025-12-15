import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-industries',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './industries.component.html',
  styleUrls: ['./industries.component.scss'],
})
export class IndustriesComponent {
  industries = [
    {
      name: 'IT & Software',
      icon: '💼',
      description: 'Reliable infrastructure for agile development.',
      color: 'cyan',
    },
    {
      name: 'BFSI',
      icon: '🏦',
      description: 'Secure, compliant systems for financial institutions.',
      color: 'cyan',
    },
    {
      name: 'Healthcare',
      icon: '⚕️',
      description: 'Reliable IT for clinical and administrative operations.',
      color: 'cyan',
    },
    {
      name: 'Education',
      icon: '🎓',
      description: 'Smart digital learning and campus technologies.',
      color: 'cyan',
    },
    {
      name: 'Manufacturing',
      icon: '🏭',
      description: 'Automation-ready IT and industrial digital systems.',
      color: 'cyan',
    },
    {
      name: 'Government',
      icon: '🏛️',
      description: 'High-security IT for public sector workloads.',
      color: 'cyan',
    },
  ];
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  coreValues = [
    {
      title: 'Secure',
      description: 'Every solution is designed with end-to-end security.'
    },
    {
      title: 'Scalable',
      description: 'Technology that grows as business needs evolve.'
    },
    {
      title: 'Ethical',
      description: 'Transparent, responsible service delivery.'
    }
  ];

  approach = [
    { num: '01', title: 'Assess', desc: 'Understand infrastructure and goals' },
    { num: '02', title: 'Design', desc: 'Build scalable architectures & hardware' },
    { num: '03', title: 'Deploy', desc: 'Seamless implementation' },
    { num: '04', title: 'Manage', desc: '24×7 proactive monitoring & support' },
    { num: '05', title: 'Optimize', desc: 'Continuous improvement & upgrades' }
  ];

  unique = [
    'Dual expertise: Enterprise IT + custom PC engineering',
    'Cross-industry success with strong SLA adherence',
    'Ethical delivery and transparent communication',
    'Mature ITIL-based operations model'
  ];
}

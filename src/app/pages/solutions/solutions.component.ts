import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss']
})
export class SolutionsComponent {
  solutions = [
    {
      title: 'Server Solutions',
      icon: '🖥️',
      description: 'High-performance server deployment and virtualization',
      items: [
        'High-performance server deployment',
        'Virtualized & hybrid environments',
        'Cluster & HA architecture setup'
      ]
    },
    {
      title: 'Network Solutions',
      icon: '🌐',
      description: 'Comprehensive networking infrastructure',
      items: [
        'Switching, routing & wireless networks',
        'SD-WAN & multi-location networking'
      ]
    },
    {
      title: 'Cloud Solutions',
      icon: '☁️',
      description: 'Cloud migration and managed cloud operations',
      items: [
        'Cloud migration (AWS/Azure/GCP)',
        'Hybrid cloud architecture',
        'Managed cloud operations',
        'Cloud security governance'
      ]
    },
    {
      title: 'Storage Solutions',
      icon: '💾',
      description: 'Enterprise storage and backup solutions',
      items: [
        'SAN/NAS deployment',
        'Backup & disaster recovery'
      ]
    },
    {
      title: 'Cybersecurity Solutions',
      icon: '🔐',
      description: 'Advanced security and threat protection',
      items: [
        'Firewall & perimeter security',
        'SOC monitoring & SIEM analytics',
        'Endpoint detection & response',
        'Zero Trust implementation'
      ]
    },
    {
      title: 'Audio-Visual Solutions',
      icon: '📹',
      description: 'Smart AV integration for modern spaces',
      items: [
        'Meeting rooms',
        'Smart displays',
        'Corporate AV integration'
      ]
    },
    {
      title: 'Surveillance & Biometric',
      icon: '🎥',
      description: 'Security and access control systems',
      items: [
        'CCTV deployment',
        'Access control automation'
      ]
    },
    {
      title: 'Rental & Refurbished Solutions',
      icon: '🔄',
      description: 'Flexible IT equipment rental options',
      items: [
        'Laptops, desktops, servers',
        'Bulk enterprise rentals'
      ]
    }
  ];
}

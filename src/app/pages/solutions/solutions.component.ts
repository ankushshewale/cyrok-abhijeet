import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

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

  solutions = [
    {
      title: 'Server Solutions',
      slug: 'server-solutions',
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
      slug: 'network-solutions',
      icon: '🌐',
      description: 'Comprehensive networking infrastructure',
      items: [
        'Switching, routing & wireless networks',
        'SD-WAN & multi-location networking'
      ]
    },
    {
      title: 'Cloud Solutions',
      slug: 'cloud-solutions',
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
      slug: 'storage-solutions',
      icon: '💾',
      description: 'Enterprise storage and backup solutions',
      items: [
        'SAN/NAS deployment',
        'Backup & disaster recovery'
      ]
    },
    {
      title: 'Cybersecurity Solutions',
      slug: 'cybersecurity-solutions',
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
      slug: 'audio-visual-solutions',
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
      slug: 'surveillance-biometric',
      icon: '🎥',
      description: 'Security and access control systems',
      items: [
        'CCTV deployment',
        'Access control automation'
      ]
    },
    {
      title: 'Rental & Refurbished Solutions',
      slug: 'rental-refurbished',
      icon: '🔄',
      description: 'Flexible IT equipment rental options',
      items: [
        'Laptops, desktops, servers',
        'Bulk enterprise rentals'
      ]
    }
  ];

  constructor() {
    this.title.setTitle('Solutions - Cyrok');
    this.meta.updateTag({
      name: 'description',
      content:
        'Discover CYROK’s technology solutions across servers, networks, cloud, storage, cybersecurity, AV, surveillance, and IT rentals.',
    });
  }
}

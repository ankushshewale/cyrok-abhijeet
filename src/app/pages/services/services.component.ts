import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services = [
    {
      id: 'managed-it',
      slug: 'managed-it-services',
      title: 'Managed IT Services',
      icon: '🛡️',
      description: 'Comprehensive IT management with 24×7 monitoring, support, and security',
      items: [
        'End-User Computing: Device configuration, patching, compliance',
        'Data Center Management: Server administration, virtualization',
        'NOC Monitoring: 24×7 monitoring, alerting, incident response',
        'Helpdesk Operations: L1–L3 support with strict SLAs',
        'Security Management: Antivirus, EDR, firewall, threat response',
        'Application Management: Deployment, versioning, performance',
        'Asset Management: Entire hardware lifecycle handling'
      ]
    },
    {
      id: 'amc-breakfix',
      slug: 'amc-break-fix',
      title: 'AMC & Break-Fix Services',
      icon: '🔧',
      description: 'Preventive maintenance and emergency repair services',
      items: [
        'Preventive hardware maintenance',
        'Emergency on-site repair & troubleshooting',
        'Software optimization & restoration',
        'SLA-based rapid response support'
      ]
    },
    {
      id: 'infrastructure',
      slug: 'infrastructure-management',
      title: 'Infrastructure Management',
      icon: '⚙️',
      description: 'Server, network, and storage infrastructure optimization',
      items: [
        'Server & network configuration',
        'Storage optimization',
        'Infrastructure performance analytics'
      ]
    },
    {
      id: 'bms',
      slug: 'building-management-system',
      title: 'Building Management System (BMS)',
      icon: '🏢',
      description: 'Smart facility monitoring and automation',
      items: [
        'Smart facility monitoring',
        'Environmental & access automation',
        'IoT-enabled building efficiency'
      ]
    },
    {
      id: 'procurement',
      slug: 'it-procurement-billing',
      title: 'IT Procurement & Billing',
      icon: '📋',
      description: 'Corporate IT hardware sourcing and vendor management',
      items: [
        'Corporate IT hardware sourcing',
        'Vendor & licensing management',
        'Predictable annual billing structures'
      ]
    },
    {
      id: 'custom-pc',
      slug: 'custom-high-performance-pc',
      title: 'Custom High-Performance PC Building',
      icon: '💻',
      description: 'CYROK engineers high-performance PCs customized for professional and gaming needs',
      highlight: true,
      specializations: [
        'Gaming & eSports',
        'CAD, VFX, 3D rendering, animation',
        'Video editing, film production',
        'AI/ML workloads and data modeling',
        'Developer & enterprise workstations'
      ],
      features: [
        'Hand-selected premium components',
        'Precision thermal engineering',
        'Clean cable management & airflow optimization',
        'Stress-tested reliability & stability',
        'Benchmark-tuned performance'
      ]
    }
  ];
}

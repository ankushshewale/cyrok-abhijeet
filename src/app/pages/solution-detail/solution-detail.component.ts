import { Component, computed, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

interface SolutionDetail {
  slug: string;
  title: string;
  icon: string;
  heroSubtitle: string;
  overview: string;
  idealFor: string[];
  capabilitiesTitle: string;
  capabilities: string[];
  outcomesTitle: string;
  outcomes: string[];
}

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

  private allSolutions: SolutionDetail[] = [
    {
      slug: 'server-solutions',
      title: 'Server Solutions',
      icon: '🖥️',
      heroSubtitle: 'High-performance, resilient compute for modern workloads.',
      overview:
        'CYROK designs and deploys server environments that balance performance, resilience, and cost. From bare metal to virtualized clusters, we ensure your core applications run on a stable, secure, and scalable foundation.',
      idealFor: [
        'Organizations consolidating legacy servers into modern platforms',
        'Businesses needing high-availability for critical applications and databases',
        'Teams planning capacity upgrades or data center refreshes',
      ],
      capabilitiesTitle: 'What We Deliver',
      capabilities: [
        'Assessment and sizing of on-premises and hosted server environments',
        'Design and deployment of virtualized and hyperconverged infrastructures',
        'High-availability (HA) and clustering for databases and application servers',
        'OS hardening, patching, and lifecycle management services',
      ],
      outcomesTitle: 'Business Outcomes',
      outcomes: [
        'Improved uptime and stability for mission-critical workloads',
        'Better utilization of hardware investments through consolidation',
        'Stronger security posture via standardized builds and patching',
      ],
    },
    {
      slug: 'network-solutions',
      title: 'Network Solutions',
      icon: '🌐',
      heroSubtitle: 'Secure, high-performing connectivity for every location.',
      overview:
        'Your network is the backbone of your business. CYROK builds secure, scalable LAN, WAN, and wireless networks that keep users and applications reliably connected—whether they are in the office, on campus, or distributed across branches.',
      idealFor: [
        'Multi-location businesses and branch-heavy organizations',
        'Enterprises upgrading legacy switching, routing, or Wi‑Fi',
        'Teams adopting SD‑WAN or segmentation for better performance and security',
      ],
      capabilitiesTitle: 'What We Deliver',
      capabilities: [
        'Campus and branch network design, including switching, routing, and Wi‑Fi',
        'SD‑WAN planning and deployment for optimized branch connectivity',
        'Network segmentation and QoS design for critical applications',
        'Monitoring and optimization of network performance and reliability',
      ],
      outcomesTitle: 'Business Outcomes',
      outcomes: [
        'Consistent, high-quality user experience across sites',
        'Improved visibility into traffic, performance, and issues',
        'A network that can scale and adapt as your business grows',
      ],
    },
    {
      slug: 'cloud-solutions',
      title: 'Cloud Solutions',
      icon: '☁️',
      heroSubtitle: 'Confidently move, run, and secure workloads in the cloud.',
      overview:
        'CYROK helps you modernize with public, private, and hybrid cloud architectures. From first migrations to fully managed cloud operations, we design secure, cost-aware environments aligned with your application and compliance needs.',
      idealFor: [
        'Organizations beginning or accelerating their cloud journey',
        'Teams re-platforming legacy apps into cloud-native models',
        'Businesses pursuing hybrid architectures across data center and cloud',
      ],
      capabilitiesTitle: 'What We Deliver',
      capabilities: [
        'Cloud readiness assessments and migration roadmaps (AWS, Azure, GCP)',
        'Landing zone design with security, identity, and networking baked in',
        'Migration of servers, databases, and applications to the cloud',
        'Managed cloud operations: monitoring, optimization, and cost governance',
      ],
      outcomesTitle: 'Business Outcomes',
      outcomes: [
        'Faster time-to-market with elastic infrastructure',
        'Better control over cloud spend through visibility and governance',
        'Improved security and resilience compared to legacy environments',
      ],
    },
    {
      slug: 'storage-solutions',
      title: 'Storage Solutions',
      icon: '💾',
      heroSubtitle: 'Protect and serve your data with the right storage strategy.',
      overview:
        'Data is at the core of every business. CYROK designs storage architectures—from high-performance arrays to archival tiers—that keep your data available, protected, and recoverable when you need it most.',
      idealFor: [
        'Businesses running data-heavy applications and databases',
        'Organizations needing robust backup and disaster recovery',
        'Teams planning storage refreshes or capacity expansion',
      ],
      capabilitiesTitle: 'What We Deliver',
      capabilities: [
        'Design and deployment of SAN, NAS, and software-defined storage',
        'Backup, disaster recovery, and business continuity planning',
        'Tiering strategies for performance, capacity, and archival data',
        'Integration with virtualization platforms and cloud storage services',
      ],
      outcomesTitle: 'Business Outcomes',
      outcomes: [
        'Reduced risk of data loss and shorter recovery times',
        'Storage environments aligned with performance and budget needs',
        'Simplified management of data growth over time',
      ],
    },
    {
      slug: 'cybersecurity-solutions',
      title: 'Cybersecurity Solutions',
      icon: '🔐',
      heroSubtitle: 'Build a security posture that keeps pace with modern threats.',
      overview:
        'CYROK provides layered security solutions that protect identities, endpoints, networks, and data. We combine the right tools and processes so your organization can detect, respond to, and recover from threats faster.',
      idealFor: [
        'Organizations formalizing or maturing their security strategy',
        'Teams struggling with alert fatigue or visibility gaps',
        'Compliance-driven environments that need strong controls and reporting',
      ],
      capabilitiesTitle: 'What We Deliver',
      capabilities: [
        'Next-generation firewall and secure remote access deployments',
        'SOC services, SIEM implementation, and log analytics',
        'Endpoint protection, EDR, and identity security controls',
        'Zero Trust–aligned architectures and segmentation strategies',
      ],
      outcomesTitle: 'Business Outcomes',
      outcomes: [
        'Reduced likelihood and impact of security incidents',
        'Better visibility into risks across users, devices, and data',
        'Security investments aligned with business and compliance priorities',
      ],
    },
    {
      slug: 'audio-visual-solutions',
      title: 'Audio-Visual Solutions',
      icon: '📹',
      heroSubtitle: 'Modern collaboration and display experiences for every space.',
      overview:
        'From huddle rooms to boardrooms, CYROK designs audio‑visual solutions that make collaboration effortless. We integrate displays, conferencing systems, and control interfaces into reliable, easy‑to‑use experiences.',
      idealFor: [
        'Organizations upgrading meeting rooms and collaboration spaces',
        'Teams adopting hybrid work and video-first communication',
        'Institutions needing digital signage or large-format displays',
      ],
      capabilitiesTitle: 'What We Deliver',
      capabilities: [
        'Design and deployment of conference room and training room AV',
        'Integration with leading video conferencing platforms',
        'Digital signage and display solutions for lobbies and common areas',
        'User-friendly control systems and standardized room designs',
      ],
      outcomesTitle: 'Business Outcomes',
      outcomes: [
        'More effective meetings with fewer technical interruptions',
        'Consistent user experience across collaboration spaces',
        'Professional environments that reinforce your brand image',
      ],
    },
    {
      slug: 'surveillance-biometric',
      title: 'Surveillance & Biometric Solutions',
      icon: '🎥',
      heroSubtitle: 'Strengthen physical security with smart, connected systems.',
      overview:
        'CYROK brings together CCTV, access control, and biometric systems into a unified, IP-based security architecture. We help you monitor facilities, control access, and retain evidence securely and compliantly.',
      idealFor: [
        'Campuses, offices, plants, and retail environments',
        'Organizations centralizing physical security operations',
        'Teams modernizing from analog to IP-based surveillance',
      ],
      capabilitiesTitle: 'What We Deliver',
      capabilities: [
        'Design and deployment of CCTV and video management systems',
        'Biometric and card-based access control solutions',
        'Secure retention, storage, and retrieval of video footage',
        'Integration with IT networks and monitoring platforms',
      ],
      outcomesTitle: 'Business Outcomes',
      outcomes: [
        'Improved control over who accesses which areas and when',
        'Better incident visibility and auditability of events',
        'A security ecosystem that scales as your footprint grows',
      ],
    },
    {
      slug: 'rental-refurbished',
      title: 'Rental & Refurbished Solutions',
      icon: '🔄',
      heroSubtitle: 'Flexible IT capacity when you need it, without heavy CAPEX.',
      overview:
        'CYROK provides rental and refurbished IT equipment so you can scale quickly for projects, training, or short‑term needs. We handle sourcing, health checks, and logistics, so your teams can stay focused on delivery.',
      idealFor: [
        'Short-term projects, events, and training programs',
        'Organizations testing new teams or locations before committing CAPEX',
        'Businesses seeking cost-effective expansion of end-user devices',
      ],
      capabilitiesTitle: 'What We Deliver',
      capabilities: [
        'Rental of laptops, desktops, servers, and networking gear',
        'Refurbished equipment with quality checks and warranties',
        'Logistics, installation, and collection support for deployments',
        'Flexible terms aligned to project timelines and budgets',
      ],
      outcomesTitle: 'Business Outcomes',
      outcomes: [
        'Lower upfront investment for temporary or variable needs',
        'Reduced lead times when expanding teams or locations',
        'Sustainable reuse of hardware without compromising reliability',
      ],
    },
  ];

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
}



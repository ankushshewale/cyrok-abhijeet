import { Component, computed, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';

interface IndustryDetail {
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  challenges: string[];
  solutions: string[];
  caseStudyTitle: string;
  caseStudySummary: string;
}

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

  private allIndustries: IndustryDetail[] = [
    {
      slug: 'bfsi',
      name: 'BFSI',
      tagline: 'Secure Solutions for BFSI',
      shortDescription:
        'High-availability, compliant, and security-hardened platforms for banking, financial services, and insurance.',
      challenges: [
        'Stringent regulatory and audit requirements across multiple jurisdictions',
        'Real-time fraud detection and data protection at scale',
        'Zero-downtime expectations for core banking and payment systems',
      ],
      solutions: [
        '24×7 monitored Security Operations Center (SOC) with threat detection and response',
        'Strong data encryption, tokenization, and secure key management',
        'Highly available, low-latency architectures for core and digital banking',
        'Secure backup, disaster recovery, and business continuity planning',
      ],
      caseStudyTitle: 'Case Study – Digital Bank Modernization',
      caseStudySummary:
        'CYROK helped a mid-size digital bank modernize its legacy infrastructure, implement end-to-end encryption, and redesign its core payment stack. The bank achieved significantly higher uptime on critical channels, faster transaction processing, and demonstrable improvements in audit readiness and security posture.',
    },
    {
      slug: 'it-software',
      name: 'IT & Software',
      tagline: 'Agile, Cloud-Ready IT for Software Teams',
      shortDescription:
        'Modern infrastructure and DevOps pipelines that keep engineering teams shipping fast and safely.',
      challenges: [
        'Frequent releases and environment drift across dev, QA, staging, and production',
        'Cost control while scaling microservices and cloud-native workloads',
        'Ensuring security and compliance without slowing development velocity',
      ],
      solutions: [
        'End-to-end DevOps enablement: CI/CD, automated testing, and observability',
        'Containerization and Kubernetes-based deployments for microservices',
        'Secure SDLC practices, secrets management, and hardened cloud baselines',
        '24×7 infrastructure monitoring with proactive alerting and tuning',
      ],
      caseStudyTitle: 'Case Study – SaaS Platform Scale-Up',
      caseStudySummary:
        'A fast-growing SaaS provider partnered with CYROK to containerize core services, introduce CI/CD pipelines, and centralize observability. Releases moved from infrequent, risky deployments to multiple safe releases per day, while infrastructure costs and incident frequency were both reduced.',
    },
    {
      slug: 'healthcare',
      name: 'Healthcare',
      tagline: 'Reliable, Compliant Healthcare IT',
      shortDescription:
        'Secure, always-on infrastructure for hospitals, clinics, and healthcare providers.',
      challenges: [
        'Protecting sensitive patient data and electronic medical records',
        'Ensuring uptime for critical clinical systems and devices',
        'Integrating legacy healthcare applications with modern digital platforms',
      ],
      solutions: [
        'Secure network and endpoint architectures for clinical environments',
        'HIPAA-style compliance-ready designs and data governance practices',
        'High-availability hosting for EMR/EHR and critical healthcare applications',
        'Secure remote access for clinicians and telemedicine platforms',
      ],
      caseStudyTitle: 'Case Study – Multi-Location Hospital Network',
      caseStudySummary:
        'CYROK designed a secure, redundant network for a multi-location hospital group and migrated key clinical workloads onto a highly available platform. As a result, clinicians enjoyed more reliable access to patient records, and the IT team gained better visibility and control over data flows between sites.',
    },
    {
      slug: 'education',
      name: 'Education',
      tagline: 'Smart Digital Campus and Learning Solutions',
      shortDescription:
        'Robust, student-friendly IT foundations for schools, colleges, and universities.',
      challenges: [
        'Delivering seamless digital learning experiences at scale',
        'Protecting student and faculty data across multiple systems',
        'Managing Wi-Fi, devices, and labs across large campuses',
      ],
      solutions: [
        'Scalable campus networking and high-density Wi-Fi',
        'Secure access to learning management systems and digital content',
        'Centralized identity and access management for students and staff',
        'End-user device management and secure remote learning setups',
      ],
      caseStudyTitle: 'Case Study – University Digital Campus',
      caseStudySummary:
        'An established university engaged CYROK to upgrade its campus network, improve Wi-Fi density, and stabilize access to online learning platforms. The institution saw fewer connectivity issues during peak usage and improved satisfaction scores from students and faculty for digital learning.',
    },
    {
      slug: 'manufacturing',
      name: 'Manufacturing',
      tagline: 'Industry 4.0–Ready Manufacturing IT',
      shortDescription:
        'Secure, automation-friendly networks and systems for plants and industrial operations.',
      challenges: [
        'Connecting OT (Operational Technology) with IT securely',
        'Minimizing downtime on shop floors and production lines',
        'Handling data from sensors, machines, and MES/ERP systems',
      ],
      solutions: [
        'Hardened industrial networks separating IT and OT environments',
        'Edge computing and secure connectivity for machines and IoT devices',
        'Monitoring and alerting for plant systems and production applications',
        'Integration support for MES, ERP, and analytics platforms',
      ],
      caseStudyTitle: 'Case Study – Smart Factory Rollout',
      caseStudySummary:
        'CYROK partnered with a discrete manufacturer to modernize plant connectivity, segment OT networks, and prepare for Industry 4.0 analytics use cases. Production teams gained more reliable machine data, while security controls around critical equipment were significantly strengthened.',
    },
    {
      slug: 'government',
      name: 'Government',
      tagline: 'Secure, Trusted IT for Public Sector',
      shortDescription:
        'Resilient, compliant solutions for government departments and public agencies.',
      challenges: [
        'Meeting strict security, compliance, and data sovereignty mandates',
        'Ensuring continuity of citizen-facing services and portals',
        'Managing complex legacy systems alongside new digital initiatives',
      ],
      solutions: [
        'Zero-trust inspired architectures for agency networks and applications',
        'Secure data centers and cloud environments with strong governance',
        'Resilient infrastructure for critical citizen services and portals',
        'Centralized monitoring, logging, and incident response capabilities',
      ],
      caseStudyTitle: 'Case Study – Citizen Service Portal',
      caseStudySummary:
        'A government department relied on CYROK to harden its citizen service portal, introduce layered defenses, and move to a more resilient infrastructure stack. The agency improved availability targets, reduced security findings during audits, and delivered a smoother experience for citizens using online services.',
    },
  ];

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
        this.title.setTitle(`${industry.name} - Cyrok`);
      }
    });
  }
}



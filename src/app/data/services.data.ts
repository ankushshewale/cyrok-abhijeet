export interface Service {
  id: string;
  slug: string;
  title: string;
  icon: string;
  description: string;
  items?: string[];
  highlight?: boolean;
  specializations?: string[];
  features?: string[];
}

export interface ServiceDetail {
  slug: string;
  title: string;
  icon: string;
  heroSubtitle: string;
  overview: string;
  scenarios: string[];
  whatWeDoTitle: string;
  whatWeDo: string[];
  benefitsTitle: string;
  benefits: string[];
}

// Services list for overview page
export const services: Service[] = [
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
      'Asset Management: Entire hardware lifecycle handling',
    ],
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
      'SLA-based rapid response support',
    ],
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
      'Infrastructure performance analytics',
    ],
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
      'IoT-enabled building efficiency',
    ],
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
      'Predictable annual billing structures',
    ],
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
      'Developer & enterprise workstations',
    ],
    features: [
      'Hand-selected premium components',
      'Precision thermal engineering',
      'Clean cable management & airflow optimization',
      'Stress-tested reliability & stability',
      'Benchmark-tuned performance',
    ],
  },
];

// Service details for detail pages
export const serviceDetails: ServiceDetail[] = [
  {
    slug: 'managed-it-services',
    title: 'Managed IT Services',
    icon: '🛡️',
    heroSubtitle: 'End-to-end management of your IT so your team can focus on the business.',
    overview:
      "CYROK's Managed IT Services act as an extension of your internal team. We take care of devices, servers, networks, security, and day-to-day support so your users stay productive and your systems stay healthy.",
    scenarios: [
      'You want predictable IT operations with clear SLAs and response times.',
      'Your internal IT team is small and overloaded with daily support tasks.',
      'You need a partner to handle monitoring, patching, and incident response 24×7.',
    ],
    whatWeDoTitle: 'What We Do',
    whatWeDo: [
      'Proactive monitoring of endpoints, servers, and network devices with 24×7 alerting.',
      'Service desk for end-users with L1–L3 support and defined SLAs.',
      'Patch management, antivirus/EDR, and policy enforcement across devices.',
      'Administration of data center workloads, virtualization platforms, and core applications.',
      'Reporting on health, incidents, and capacity so you always know where you stand.',
    ],
    benefitsTitle: 'Key Benefits',
    benefits: [
      'Fewer outages and faster resolution when issues occur.',
      'A single accountable partner for day-to-day IT operations.',
      'More time for your team to focus on strategic projects instead of firefighting.',
    ],
  },
  {
    slug: 'amc-break-fix',
    title: 'AMC & Break-Fix Services',
    icon: '🔧',
    heroSubtitle: 'Keep critical hardware running with preventive care and rapid repair.',
    overview:
      'Annual Maintenance Contracts (AMC) and break-fix services from CYROK ensure that your laptops, desktops, servers, and peripherals stay in working order. When something fails, our engineers respond quickly to get you back online.',
    scenarios: [
      'You rely on on-premises hardware and need predictable support coverage.',
      'You want regular health checks and cleaning to extend the life of devices.',
      'You need guaranteed response times for urgent breakdowns.',
    ],
    whatWeDoTitle: 'What We Do',
    whatWeDo: [
      'Scheduled preventive maintenance visits for cleaning, updates, and health checks.',
      'On-site and remote troubleshooting for unexpected failures.',
      'Replacement recommendations and support when components reach end-of-life.',
      'Basic OS and software tune-ups to keep systems responsive.',
    ],
    benefitsTitle: 'Key Benefits',
    benefits: [
      'Reduced unplanned downtime from hardware issues.',
      'Extended lifespan of IT assets through regular care.',
      'Clear expectations via SLAs and coverage windows.',
    ],
  },
  {
    slug: 'infrastructure-management',
    title: 'Infrastructure Management',
    icon: '⚙️',
    heroSubtitle: 'Optimize the core server, network, and storage layer of your IT.',
    overview:
      'CYROK manages and optimizes your underlying infrastructure so applications run smoothly. We focus on performance, capacity, and resilience across servers, networks, and storage systems.',
    scenarios: [
      'You run business-critical applications on-premises or in co-location.',
      'You are experiencing slowdowns or recurring infrastructure-related incidents.',
      'You need help planning upgrades and scaling your environment.',
    ],
    whatWeDoTitle: 'What We Do',
    whatWeDo: [
      'Configuration and lifecycle management of servers, hypervisors, and core services.',
      'Network configuration, optimization, and basic security hardening.',
      'Storage capacity planning and optimization for performance and reliability.',
      'Health, performance, and availability monitoring with regular review reports.',
    ],
    benefitsTitle: 'Key Benefits',
    benefits: [
      'More stable platforms for your applications and databases.',
      'Better visibility into capacity and performance trends.',
      'Guidance on when and how to invest in infrastructure upgrades.',
    ],
  },
  {
    slug: 'building-management-system',
    title: 'Building Management System (BMS)',
    icon: '🏢',
    heroSubtitle: 'Connect and control your facilities with smart building technology.',
    overview:
      "CYROK's BMS services integrate sensors, controllers, and software to monitor and optimize your building environments. From HVAC to access control, we help you centralize visibility and automation.",
    scenarios: [
      'You manage offices, campuses, or facilities where energy use and comfort matter.',
      'You want to unify disparate building systems into a central view.',
      'You are planning a new facility and want a modern, IoT-ready BMS approach.',
    ],
    whatWeDoTitle: 'What We Do',
    whatWeDo: [
      'Assessment and design of building management architectures.',
      'Integration of environmental, access, and utility systems into a single view.',
      'Deployment of controllers, sensors, and dashboards for operators.',
      'Basic analytics and alerting around anomalies, failures, or inefficiencies.',
    ],
    benefitsTitle: 'Key Benefits',
    benefits: [
      'Better comfort and safety for occupants.',
      'Lower operational costs through smarter energy and facility usage.',
      'Centralized visibility across building systems.',
    ],
  },
  {
    slug: 'it-procurement-billing',
    title: 'IT Procurement & Billing',
    icon: '📋',
    heroSubtitle: 'Make IT sourcing predictable, compliant, and easier to manage.',
    overview:
      'CYROK helps you plan, source, and manage IT hardware and related contracts. We take care of vendor coordination, renewals, and billing structures so you get the right equipment at the right time and cost.',
    scenarios: [
      'You frequently purchase laptops, desktops, network gear, or servers.',
      'You want consolidated billing and visibility across multiple IT suppliers.',
      'You need help managing renewals, warranties, and license timelines.',
    ],
    whatWeDoTitle: 'What We Do',
    whatWeDo: [
      'Advisory on hardware standards and compatible configurations.',
      'Coordination with vendors and OEMs for quotations and fulfillment.',
      'Consolidated invoicing and predictable billing models where possible.',
      'Tracking of asset, warranty, and license information.',
    ],
    benefitsTitle: 'Key Benefits',
    benefits: [
      'Less time spent on back-and-forth with multiple suppliers.',
      'More predictable IT spend and fewer surprise renewals.',
      'Standardized device catalogs that are easier to support.',
    ],
  },
  {
    slug: 'custom-high-performance-pc',
    title: 'Custom High-Performance PC Building',
    icon: '💻',
    heroSubtitle: 'Workstations and rigs tuned for gaming, content creation, and engineering.',
    overview:
      'CYROK designs and builds custom PCs that are tailored to your workload—whether that is competitive gaming, 3D rendering, video editing, or data science. Every build is assembled, tuned, and tested by experienced engineers.',
    scenarios: [
      'You need a workstation that can handle heavy CAD, VFX, or 3D modeling.',
      'You are a gamer or streamer who wants stable high FPS and low noise.',
      'You run AI/ML workloads or simulations and need GPU-optimized systems.',
    ],
    whatWeDoTitle: 'What We Do',
    whatWeDo: [
      'Consultation on use cases, budget, and performance expectations.',
      'Selection of CPUs, GPUs, storage, and cooling tailored to your workloads.',
      'Professional assembly with cable management and thermal optimization.',
      'Stress testing, benchmarking, and OS optimization before delivery.',
    ],
    benefitsTitle: 'Key Benefits',
    benefits: [
      'A system built specifically for your tools and workflows.',
      'Higher reliability and thermals compared to generic off-the-shelf PCs.',
      'Expert support from the same team that designed and built your machine.',
    ],
  },
];


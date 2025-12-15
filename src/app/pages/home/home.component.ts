import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  // Key Services
  keyServices = [
    {
      icon: '🛡️',
      title: 'Managed IT Services',
      description: 'End-to-end IT management with 24×7 monitoring, support, and security'
    },
    {
      icon: '🔐',
      title: 'Cybersecurity & SOC',
      description: 'Advanced threat detection and Zero Trust security implementation'
    },
    {
      icon: '☁️',
      title: 'Cloud & Data Center',
      description: 'Scalable cloud migration and hybrid infrastructure management'
    },
    {
      icon: '⚙️',
      title: 'Enterprise Infrastructure',
      description: 'Server, network, and storage solutions for enterprises'
    },
    {
      icon: '💻',
      title: 'Custom High-Performance PCs',
      description: 'Precision-engineered systems for gaming, CAD, VFX, and AI/ML'
    },
    {
      icon: '📹',
      title: 'Audio-Visual & Surveillance',
      description: 'Smart AV integration and CCTV solutions for modern spaces'
    }
  ];

  // Why Choose CYROK
  whyChoose = [
    'Expertise across IT, infrastructure & hardware engineering',
    '24×7 monitoring & support',
    'Security-first implementation',
    'Scalable, future-proof systems',
    'Ethical business practices'
  ];

  // Industries
  industries = [
    { name: 'IT', icon: '💼' },
    { name: 'BFSI', icon: '🏦' },
    { name: 'Education', icon: '🎓' },
    { name: 'Healthcare', icon: '⚕️' },
    { name: 'Government', icon: '🏛️' },
    { name: 'Manufacturing', icon: '🏭' }
  ];

  // Process Steps
  processSteps = [
    { num: '01', title: 'Assess', desc: 'Understand infrastructure and goals' },
    { num: '02', title: 'Design', desc: 'Build scalable architectures' },
    { num: '03', title: 'Deploy', desc: 'Seamless implementation' },
    { num: '04', title: 'Manage', desc: '24×7 proactive monitoring' },
    { num: '05', title: 'Optimize', desc: 'Continuous improvement' }
  ];

  // Custom PC Specializations
  pcSpecializations = [
    'AAA Gaming & eSports',
    '3D Modelling, CAD, VFX, Rendering',
    'Video Editing & Post-Production',
    'AI/ML & Data Computing',
    'Professional Workstations'
  ];
}

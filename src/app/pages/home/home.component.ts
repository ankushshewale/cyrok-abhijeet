import { Component, inject, ViewChild, ElementRef, OnInit, OnDestroy, PLATFORM_ID, ChangeDetectorRef } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private title = inject(Title);
  private meta = inject(Meta);
  private platformId = inject(PLATFORM_ID);
  private cdr = inject(ChangeDetectorRef);
  
  @ViewChild('heroSlider', { static: true }) heroSliderRef!: ElementRef<HTMLElement>;
  
  currentSlideIndex = 0;
  private autoAdvanceInterval: any;
  private readonly SLIDE_DURATION = 5000; // 5 seconds per slide

  // Key Services
  keyServices = [
    {
      icon: '🛡️',
      title: 'Managed IT Services',
      description: 'End-to-end IT management with 24×7 monitoring, support, and security',
      route: '/services/managed-it-services'
    },
    {
      icon: '🔐',
      title: 'Cybersecurity & SOC',
      description: 'Advanced threat detection and Zero Trust security implementation',
      route: '/solutions/cybersecurity-solutions'
    },
    {
      icon: '☁️',
      title: 'Cloud & Data Center',
      description: 'Scalable cloud migration and hybrid infrastructure management',
      route: '/solutions/cloud-solutions'
    },
    {
      icon: '⚙️',
      title: 'Enterprise Infrastructure',
      description: 'Server, network, and storage solutions for enterprises',
      route: '/services/infrastructure-management'
    },
    {
      icon: '💻',
      title: 'Custom High-Performance PCs',
      description: 'Precision-engineered systems for gaming, CAD, VFX, and AI/ML',
      route: '/services/custom-high-performance-pc'
    },
    {
      icon: '📹',
      title: 'Audio-Visual & Surveillance',
      description: 'Smart AV integration and CCTV solutions for modern spaces',
      route: '/solutions/audio-visual-solutions'
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

  // Hero Slider Slides
  heroSlides = [
    {
      title: 'Secure.',
      titleHighlight: 'Scalable.',
      titleHighlight2: 'Ethical.',
      subtitle: 'Enterprise IT solutions and high-performance custom PCs built for reliability, speed, and the future.',
      primaryCta: { label: 'Explore Services', route: '/services' },
      secondaryCta: { label: 'Request a Consultation', route: '/contact' },
      image: '/images/homepage.jpg',
      imageAlt: 'CYROK Enterprise IT Solutions'
    },
    {
      title: 'Cybersecurity',
      titleHighlight: 'First.',
      titleHighlight2: 'Always.',
      subtitle: 'Advanced threat detection, Zero Trust security, and 24×7 SOC monitoring to protect your digital assets.',
      primaryCta: { label: 'Learn More', route: '/services' },
      secondaryCta: { label: 'Get Protected', route: '/contact' },
      image: '/images/CybersecuritySoc.jpeg',
      imageAlt: 'Cybersecurity and SOC Services'
    },
    {
      title: 'Custom',
      titleHighlight: 'High-Performance',
      titleHighlight2: 'PCs.',
      subtitle: 'Precision-engineered systems for gaming, CAD, VFX, AI/ML, and professional workstations.',
      primaryCta: { label: 'Build Custom PC', route: '/products' },
      secondaryCta: { label: 'Request Quote', route: '/contact' },
      image: '/images/customHighPc.jpeg',
      imageAlt: 'Custom High-Performance PC Building'
    },
    {
      title: 'Cloud &',
      titleHighlight: 'Infrastructure',
      titleHighlight2: 'Solutions.',
      subtitle: 'Scalable cloud migration, hybrid infrastructure, and enterprise-grade data center management.',
      primaryCta: { label: 'Explore Solutions', route: '/solutions' },
      secondaryCta: { label: 'Schedule Consultation', route: '/contact' },
      image: '/images/managedItServices.jpeg',
      imageAlt: 'Cloud and Infrastructure Solutions'
    }
  ];

  constructor() {
    this.title.setTitle('Home - Cyrok');
    this.meta.updateTag({
      name: 'description',
      content:
        'CYROK Technologies delivers secure, scalable, and ethical IT services, cloud solutions, cybersecurity, and custom high-performance PCs for enterprises and professionals.',
    });
  }

  ngOnInit() {
    // Only run browser-specific code in the browser
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    
    // Initialize first slide as active
    this.updateRadioButton();
    
    // Start auto-advance timer
    this.startAutoAdvance();
    
    // Pause on hover, resume on mouse leave
    const sliderEl = this.heroSliderRef?.nativeElement;
    if (sliderEl) {
      sliderEl.addEventListener('mouseenter', () => this.pauseAutoAdvance());
      sliderEl.addEventListener('mouseleave', () => this.startAutoAdvance());
      // Pause on focus (keyboard navigation)
      sliderEl.addEventListener('focusin', () => this.pauseAutoAdvance());
      sliderEl.addEventListener('focusout', () => this.startAutoAdvance());
    }
  }

  ngOnDestroy() {
    this.pauseAutoAdvance();
  }

  /**
   * Start auto-advancing slides
   * Uses minimal JS only for timer synchronization
   */
  private startAutoAdvance() {
    // Only run in browser
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    
    this.pauseAutoAdvance(); // Clear any existing interval
    this.autoAdvanceInterval = setInterval(() => {
      this.goToNextSlide();
    }, this.SLIDE_DURATION);
  }

  /**
   * Pause auto-advance (on hover or interaction)
   */
  private pauseAutoAdvance() {
    if (this.autoAdvanceInterval) {
      clearInterval(this.autoAdvanceInterval);
      this.autoAdvanceInterval = null;
    }
  }

  /**
   * Navigate to next slide
   */
  goToNextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.heroSlides.length;
    this.updateRadioButton();
    this.cdr.detectChanges(); // Force change detection for indicator updates
    this.startAutoAdvance(); // Restart timer after manual navigation
  }

  /**
   * Navigate to previous slide
   */
  goToPrevSlide() {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.heroSlides.length) % this.heroSlides.length;
    this.updateRadioButton();
    this.cdr.detectChanges(); // Force change detection for indicator updates
    this.startAutoAdvance(); // Restart timer after manual navigation
  }

  /**
   * Navigate to specific slide by index
   */
  goToSlide(index: number) {
    if (index >= 0 && index < this.heroSlides.length) {
      this.currentSlideIndex = index;
      this.updateRadioButton();
      this.cdr.detectChanges(); // Force change detection for indicator updates
      this.startAutoAdvance(); // Restart timer after manual navigation
    }
  }

  /**
   * Update the checked radio button to sync with currentSlideIndex
   * This allows CSS :checked selectors to control slide visibility
   */
  private updateRadioButton() {
    // Only run in browser (document is not available in SSR)
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    
    const radioId = `hero-slide-${this.currentSlideIndex}`;
    const radio = document.getElementById(radioId) as HTMLInputElement;
    if (radio) {
      radio.checked = true;
    }
  }
}

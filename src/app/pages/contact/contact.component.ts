import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;

  companyInfo = {
    name: 'CYROK Technologies Pvt. Ltd.',
    email: 'info@cyrok.net',
    website: 'www.cyrok.net',
  };

  private title = inject(Title);
  private meta = inject(Meta);

  // Pattern validators to prevent injection/abuse
  private namePattern = /^[a-zA-Z\s\-'\.]{2,100}$/;
  // Phone: optional leading +, followed by digits only (no spaces or other symbols)
  private phonePattern = /^\+?\d{10,19}$/;
  private companyPattern = /^[a-zA-Z0-9\s\-'\.&,]{2,100}$/;
  private subjectPattern = /^[a-zA-Z0-9\s\-'\.!?]{3,200}$/;
  private messagePattern = /^[\s\S]{10,5000}$/;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(100),
          Validators.pattern(this.namePattern),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.maxLength(254),
        ],
      ],
      phone: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(20),
          Validators.pattern(this.phonePattern),
        ],
      ],
      company: [
        '',
        [
          Validators.minLength(2),
          Validators.maxLength(100),
          Validators.pattern(this.companyPattern),
        ],
      ],
      subject: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(200),
          Validators.pattern(this.subjectPattern),
        ],
      ],
      message: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(5000),
          Validators.pattern(this.messagePattern),
        ],
      ],
      inquiryType: ['general', Validators.required],
    });

    this.title.setTitle('Contact - Cyrok');
    this.meta.updateTag({
      name: 'description',
      content:
        'Contact CYROK Technologies for enterprise IT services, cloud solutions, cybersecurity, and custom high-performance PC builds.',
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  // Trim whitespace from form values before submission
  private trimFormValues(): void {
    Object.keys(this.contactForm.controls).forEach((key) => {
      const control = this.contactForm.get(key);
      if (control && typeof control.value === 'string') {
        const trimmed = control.value.trim();
        control.setValue(trimmed);
      }
    });
  }

  onSubmit() {
    this.submitted = true;

    // Trim whitespace from all fields
    this.trimFormValues();

    if (this.contactForm.valid) {
      // Handle form submission
      console.log('Form submitted:', this.contactForm.value);
      // Here you would typically send the data to a backend service
      alert('Thank you for your inquiry! We will get back to you soon.');
      this.contactForm.reset();
      this.submitted = false;
    }
  }
}

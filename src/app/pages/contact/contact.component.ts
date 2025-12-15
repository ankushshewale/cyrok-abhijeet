import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

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
    email: 'info@cyrok.com',
    website: 'www.cyrok.com',
  };

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      company: [''],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]],
      inquiryType: ['general', Validators.required],
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit() {
    this.submitted = true;

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

 import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApplicationService } from '../../core/services/application.service';

@Component({
  selector: 'app-application-entry',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './application-entry.html',
  styleUrl: './application-entry.css'
})
export class ApplicationEntryComponent {
  formData = {
    applicantName: '',
    aadhaarNo: '',
    mobileNo: '',
    serviceType: 'Income Certificate',
    address: '',
    incomeAmount: 0,
    deliveryType: 'Standard' as 'Standard' | 'Tatkal'
  };

  constructor(private appService: ApplicationService, private router: Router) {}

  onSubmit(): void {
    if (this.formData.applicantName && this.formData.aadhaarNo) {
      const createdApp = this.appService.addApplication({
        applicantName: this.formData.applicantName,
        aadhaarNo: this.formData.aadhaarNo,
        mobileNo: this.formData.mobileNo,
        serviceType: this.formData.serviceType,
        address: this.formData.address,
        incomeAmount: Number(this.formData.incomeAmount),
        deliveryType: this.formData.deliveryType,
        feePaid: this.formData.deliveryType === 'Tatkal' ? 100 : 50
      });

      alert(`✅ Application Registered Successfully!\nGenerated ID: ${createdApp.id}`);
      this.router.navigate(['/receipt', createdApp.id]);
    }
  }
}
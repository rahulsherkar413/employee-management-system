 import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApplicationService } from '../../core/services/application.service';
import { Application } from '../../core/models/application.model'; 
import { NotificationService } from '../../core/services/notification.service';

@Component({
  selector: 'app-certificate-issue',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './certificate-issue.html',
  styleUrl: './certificate-issue.css'
})
export class CertificateIssueComponent implements OnInit {
  applications: Application[] = [];
  selectedApp: Application | null = null;
  
  isSigning: boolean = false;
  signingAppId: string | null = null;

  rejectAppId: string | null = null;
  rejectionReason: string = 'Incomplete documentation provided.';

  constructor(
    private appService: ApplicationService,
    private notifService: NotificationService
  ) {}

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList(): void {
    this.applications = this.appService.getApplications();
  }

  approveWithDsc(app: Application): void {
    this.signingAppId = app.id;
    this.isSigning = true;

    setTimeout(() => {
      this.isSigning = false;
      this.signingAppId = null;

      this.appService.updateStatus(app.id, 'Approved');

      this.notifService.sendAlert(
        'Certificate Approved',
        `Great news! Your application (#${app.id}) has been digitally signed and approved by Tahsildar Officer.`,
        'whatsapp',
        app.mobileNo || '+91 98******10'
      );

      this.refreshList();
    }, 1600);
  }

  openRejectModal(app: Application): void {
    this.rejectAppId = app.id;
  }

  confirmReject(): void {
    if (!this.rejectAppId) return;

    this.appService.updateStatus(this.rejectAppId, 'Rejected');

    this.notifService.sendAlert(
      'Application Update',
      `Application #${this.rejectAppId} was rejected. Reason: ${this.rejectionReason}`,
      'sms'
    );

    this.rejectAppId = null;
    this.refreshList();
  }
}
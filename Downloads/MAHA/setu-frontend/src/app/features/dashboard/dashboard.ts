 import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationService } from '../../core/services/application.service';
import { Application } from '../../core/models/application.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent implements OnInit {
  applications: Application[] = [];
  
  totalApps: number = 0;
  pendingApps: number = 0;
  approvedApps: number = 0;
  rejectedApps: number = 0;
  totalRevenue: number = 0;

  constructor(private appService: ApplicationService) {}

  ngOnInit(): void {
    this.loadStats();
  }

  loadStats(): void {
    this.applications = this.appService.getApplications();
    this.totalApps = this.applications.length;
    this.pendingApps = this.applications.filter(a => a.status === 'Pending').length;
    this.approvedApps = this.applications.filter(a => a.status === 'Approved').length;
    this.rejectedApps = this.applications.filter(a => a.status === 'Rejected').length;
    
    // Safely aggregate fee revenue with fallback to 0
    this.totalRevenue = this.applications.reduce((acc, curr) => acc + (curr.feePaid ?? 0), 0);
  }
}
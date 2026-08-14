 import { Injectable } from '@angular/core';
import { Application } from '../models/application.model';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  private applications: Application[] = [
    {
      id: 'SETU-982134',
      applicantName: 'Rahul Ramesh Sharma',
      aadhaarNo: '987654321012',
      mobileNo: '9823012345',
      serviceType: 'Income Certificate',
      address: 'Plot 42, Civil Lines, Nagpur, Maharashtra',
      incomeAmount: 180000,
      status: 'Pending',
      appliedDate: '2026-08-12',
      deliveryType: 'Tatkal',
      feePaid: 100
    },
    {
      id: 'SETU-884102',
      applicantName: 'Priya Sunil Patil',
      aadhaarNo: '876543210987',
      mobileNo: '9765432109',
      serviceType: 'Domicile Certificate',
      address: 'Shivaji Nagar, Pune, Maharashtra',
      incomeAmount: 350000,
      status: 'Approved',
      appliedDate: '2026-08-10',
      deliveryType: 'Standard',
      feePaid: 50
    },
    {
      id: 'SETU-773199',
      applicantName: 'Amit Vikas Deshmukh',
      aadhaarNo: '765432109876',
      mobileNo: '9811223344',
      serviceType: 'Caste Certificate',
      address: 'Ward No 4, Amravati, Maharashtra',
      incomeAmount: 120000,
      status: 'Pending',
      appliedDate: '2026-08-13',
      deliveryType: 'Standard',
      feePaid: 50
    }
  ];

  getApplications(): Application[] {
    return this.applications;
  }

  getApplicationById(id: string): Application | undefined {
    return this.applications.find(app => app.id.toUpperCase() === id.toUpperCase());
  }

  addApplication(appData: Omit<Application, 'id' | 'status' | 'appliedDate'>): Application {
    const newApp: Application = {
      ...appData,
      id: 'SETU-' + Math.floor(100000 + Math.random() * 900000),
      status: 'Pending',
      appliedDate: new Date().toISOString().split('T')[0]
    };
    this.applications.unshift(newApp);
    return newApp;
  }

  updateStatus(id: string, status: 'Approved' | 'Rejected'): void {
    const app = this.getApplicationById(id);
    if (app) {
      app.status = status;
    }
  }
}
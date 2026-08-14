 import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login';
import { ApplicationEntryComponent } from './features/application-entry/application-entry';
import { TrackStatusComponent } from './features/track-status/track-status';
import { CertificateIssueComponent } from './features/certificate-issue/certificate-issue';
import { DashboardComponent } from './features/dashboard/dashboard';
import { ReportsComponent } from './features/reports/reports';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'application-entry', component: ApplicationEntryComponent },
  { path: 'track', component: TrackStatusComponent },
  { path: 'certificate-issue', component: CertificateIssueComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'reports', component: ReportsComponent },
  { path: '**', redirectTo: 'login' }
];
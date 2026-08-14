 import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  selectedRole: string = 'operator';
  username: string = 'operator_setu4021';
  password: string = '••••••••';

  constructor(private router: Router) {}

  selectRole(role: string): void {
    this.selectedRole = role;
    if (role === 'operator') this.username = 'operator_setu4021';
    if (role === 'officer') this.username = 'tahsildar_nagpur';
    if (role === 'admin') this.username = 'sys_admin_maha';
  }

  onLogin(): void {
    if (this.selectedRole === 'operator') this.router.navigate(['/application-entry']);
    else if (this.selectedRole === 'officer') this.router.navigate(['/certificate-issue']);
    else if (this.selectedRole === 'admin') this.router.navigate(['/dashboard']);
  }
}
  import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { LanguageService } from './core/services/langauge.service';
import { NotificationService } from './core/services/notification.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'setu-frontend';
  showDrawer: boolean = false;

  constructor(
    public router: Router, 
    public langService: LanguageService,
    public notifService: NotificationService
  ) {}

  toggleLang(): void {
    const current = this.langService.getCurrentLang();
    this.langService.setLanguage(current === 'en' ? 'mr' : 'en');
  }

  toggleDrawer(): void {
    this.showDrawer = !this.showDrawer;
    if (this.showDrawer) {
      this.notifService.markAllAsRead();
    }
  }

  // Quick testing methods
  triggerTestSMS(): void {
    this.notifService.sendAlert('SMS Sent', 'Your application #SETU-554129 has been registered.', 'sms');
  }

  triggerTestWhatsApp(): void {
    this.notifService.sendAlert('WhatsApp Alert', 'Certificate issued for #SETU-982134. Ready for download!', 'whatsapp');
  }
}
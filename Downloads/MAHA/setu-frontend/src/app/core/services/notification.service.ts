import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface AppNotification {
  id: string;
  title: string;
  message: string;
  type: 'sms' | 'whatsapp';
  phone: string;
  timestamp: Date;
  read: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notificationsSubject = new BehaviorSubject<AppNotification[]>([
    {
      id: '1',
      title: 'SMS Sent',
      message: 'Application #SETU-982134 received. Under review by Tahsildar Officer.',
      type: 'sms',
      phone: '+91 98******10',
      timestamp: new Date(Date.now() - 1000 * 60 * 25), // 25 mins ago
      read: false
    },
    {
      id: '2',
      title: 'WhatsApp Alert',
      message: 'Your Income Certificate app #SETU-982134 has been APPROVED! Download receipt from portal.',
      type: 'whatsapp',
      phone: '+91 98******10',
      timestamp: new Date(Date.now() - 1000 * 60 * 5), // 5 mins ago
      read: false
    }
  ]);

  notifications$ = this.notificationsSubject.asObservable();

  get notifications(): AppNotification[] {
    return this.notificationsSubject.value;
  }

  get unreadCount(): number {
    return this.notifications.filter(n => !n.read).length;
  }

  markAllAsRead(): void {
    const updated = this.notifications.map(n => ({ ...n, read: true }));
    this.notificationsSubject.next(updated);
  }

  sendAlert(title: string, message: string, type: 'sms' | 'whatsapp', phone: string = '+91 98******10'): void {
    const newNotif: AppNotification = {
      id: Date.now().toString(),
      title,
      message,
      type,
      phone,
      timestamp: new Date(),
      read: false
    };
    this.notificationsSubject.next([newNotif, ...this.notifications]);
  }
}
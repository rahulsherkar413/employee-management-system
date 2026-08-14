 import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLang: 'en' | 'mr' = 'en';

  private translations: Record<string, Record<string, string>> = {
    en: {
      portalTitle: 'MAHA SETU',
      subTitle: 'Government of Maharashtra Citizen Services',
      signOut: 'Sign Out',
      newApp: 'New Application',
      trackStatus: 'Track Status',
      receiptView: 'Receipt View',
      officerApprovals: 'Officer Approvals',
      dashboard: 'Dashboard'
    },
    mr: {
      portalTitle: 'महा सेतू',
      subTitle: 'महाराष्ट्र शासन नागरिक सेवा',
      signOut: 'बाहेर पडणे',
      newApp: 'नवीन अर्ज',
      trackStatus: 'अर्जाची स्थिती',
      receiptView: 'पावती पहा',
      officerApprovals: 'अधिकारी मान्यता',
      dashboard: 'डॅशबोर्ड'
    }
  };

  getCurrentLang(): 'en' | 'mr' {
    return this.currentLang;
  }

  // 👈 Add or update this method:
  setLanguage(lang: 'en' | 'mr'): void {
    this.currentLang = lang;
  }

  translate(key: string): string {
    return this.translations[this.currentLang]?.[key] || key;
  }
}
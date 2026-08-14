import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateIssue } from './certificate-issue';

describe('CertificateIssue', () => {
  let component: CertificateIssue;
  let fixture: ComponentFixture<CertificateIssue>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificateIssue],
    }).compileComponents();

    fixture = TestBed.createComponent(CertificateIssue);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

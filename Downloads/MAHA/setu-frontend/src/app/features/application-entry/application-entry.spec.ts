import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationEntry } from './application-entry';

describe('ApplicationEntry', () => {
  let component: ApplicationEntry;
  let fixture: ComponentFixture<ApplicationEntry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplicationEntry],
    }).compileComponents();

    fixture = TestBed.createComponent(ApplicationEntry);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

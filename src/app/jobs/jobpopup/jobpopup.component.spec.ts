import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobpopupComponent } from './jobpopup.component';

describe('JobpopupComponent', () => {
  let component: JobpopupComponent;
  let fixture: ComponentFixture<JobpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobpopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

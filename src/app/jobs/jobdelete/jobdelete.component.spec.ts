import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobdeleteComponent } from './jobdelete.component';

describe('JobdeleteComponent', () => {
  let component: JobdeleteComponent;
  let fixture: ComponentFixture<JobdeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobdeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymserviceComponent } from './gymservice.component';

describe('GymserviceComponent', () => {
  let component: GymserviceComponent;
  let fixture: ComponentFixture<GymserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GymserviceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GymserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

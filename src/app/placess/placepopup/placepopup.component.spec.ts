import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacepopupComponent } from './placepopup.component';

describe('PlacepopupComponent', () => {
  let component: PlacepopupComponent;
  let fixture: ComponentFixture<PlacepopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlacepopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlacepopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

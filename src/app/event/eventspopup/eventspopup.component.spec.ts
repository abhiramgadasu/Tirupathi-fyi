import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventspopupComponent } from './eventspopup.component';

describe('EventspopupComponent', () => {
  let component: EventspopupComponent;
  let fixture: ComponentFixture<EventspopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventspopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventspopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

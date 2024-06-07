import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventdeleteComponent } from './eventdelete.component';

describe('EventdeleteComponent', () => {
  let component: EventdeleteComponent;
  let fixture: ComponentFixture<EventdeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventdeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

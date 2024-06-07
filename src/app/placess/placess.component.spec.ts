import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacessComponent } from './placess.component';

describe('PlacessComponent', () => {
  let component: PlacessComponent;
  let fixture: ComponentFixture<PlacessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlacessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlacessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

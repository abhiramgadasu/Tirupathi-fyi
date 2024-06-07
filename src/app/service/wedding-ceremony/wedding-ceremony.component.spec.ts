import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingCeremonyComponent } from './wedding-ceremony.component';

describe('WeddingCeremonyComponent', () => {
  let component: WeddingCeremonyComponent;
  let fixture: ComponentFixture<WeddingCeremonyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeddingCeremonyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeddingCeremonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

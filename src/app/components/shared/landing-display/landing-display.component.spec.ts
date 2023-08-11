import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingDisplayComponent } from './landing-display.component';

describe('LandingDisplayComponent', () => {
  let component: LandingDisplayComponent;
  let fixture: ComponentFixture<LandingDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingDisplayComponent]
    });
    fixture = TestBed.createComponent(LandingDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

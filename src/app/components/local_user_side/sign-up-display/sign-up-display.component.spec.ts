import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpDisplayComponent } from './sign-up-display.component';

describe('SignUpDisplayComponent', () => {
  let component: SignUpDisplayComponent;
  let fixture: ComponentFixture<SignUpDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignUpDisplayComponent]
    });
    fixture = TestBed.createComponent(SignUpDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

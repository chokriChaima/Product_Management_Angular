import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInDisplayComponent } from './sign-in-display.component';

describe('SignInDisplayComponent', () => {
  let component: SignInDisplayComponent;
  let fixture: ComponentFixture<SignInDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignInDisplayComponent]
    });
    fixture = TestBed.createComponent(SignInDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNotFoundDialogComponent } from './user-not-found-dialog.component';

describe('UserNotFoundDialogComponent', () => {
  let component: UserNotFoundDialogComponent;
  let fixture: ComponentFixture<UserNotFoundDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserNotFoundDialogComponent]
    });
    fixture = TestBed.createComponent(UserNotFoundDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PM_Angular';
  
  getErrorMessage(controlName: string, form : FormGroup) {
    const control = form.get(controlName);
    if (control!.hasError('required')) {
      return 'This field is required.';
    }
    if (control!.hasError('email')) {
      return 'Invalid email format.';
    }
    if (control!.hasError('minlength')) {
      return 'Password must be at least 6 characters long.';
    }
    return '';
  }
}

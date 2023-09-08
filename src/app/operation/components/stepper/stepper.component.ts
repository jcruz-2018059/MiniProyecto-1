import { Component } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';

import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/material/stepper';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html'
})
export class StepperComponent {
  showDpiField = false;

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', [Validators.required, this.dateValidator]]
  });

  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', [Validators.required, this.onlyLettersValidator]]
  });

  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', [Validators.required, this.dpiValidator]]
  });

  stepperOrientation: Observable<StepperOrientation>;

  constructor(
    private _formBuilder: FormBuilder,
    breakpointObserver: BreakpointObserver
  ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 900px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }

  dateValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const selectedDate = new Date(control.value);
    const today = new Date();

    if (selectedDate >= today) {
      return { dateIsInvalid: true };
    }

    return null;
  }

  onlyLettersValidator(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    const value = control.value;

    if (!/^[a-zA-Z]+$/.test(value)) {
      return { containsNonLetters: true };
    }

    return null;
  }

  dpiValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const value = control.value;

    if (!/^\d{13}$/.test(value)) {
      return { invalidDpi: true };
    }

    return null;
  }
}

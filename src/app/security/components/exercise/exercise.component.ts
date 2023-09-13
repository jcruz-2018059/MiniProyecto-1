// Angular
import { Component } from '@angular/core';
import {
  Validators,
  FormBuilder,
  FormGroup,
  AbstractControl
} from '@angular/forms';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent {
  showbutton = false;
  isChecked = false;
  text = '';
  form!: FormGroup;
  maxDate: Date = new Date();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required, this.whiteSpace]],
      birthday: ['', Validators.required],
      nit: ['', [Validators.required, this.noSpecialCaractersValidator]],
      coment: [
        '',
        [Validators.required, this.noEmptyValidator, this.whiteSpace]
      ],
      phone: [''],
      address: ['']
    });
  }

  noSpecialCaractersValidator(control: AbstractControl) {
    const valor = control.value;
    if (!valor) {
      return null;
    }
    const caracteresPermitidos = /^[a-zA-Z0-9]+$/;
    if (!caracteresPermitidos.test(valor)) {
      return { textoNoValido: true };
    }
    return null;
  }

  noEmptyValidator(control: AbstractControl) {
    const valor = control.value;
    if (!valor) {
      return { campoVacio: true };
    }

    if (!/[a-zA-Z]/.test(valor)) {
      return { outletter: true };
    }

    return null;
  }

  whiteSpace(control: AbstractControl) {
    const valor = control.value;

    if (!valor) {
      return null;
    }

    if (valor.trim() !== valor) {
      return { whiteSpace: true };
    }

    return null;
  }

  onClick() {
    this.showbutton = true;
  }

  showInputs() {
    this.isChecked = !this.isChecked;

    if (this.isChecked) {
      this.form
        .get('phone')
        ?.setValidators([Validators.required, Validators.pattern(/^[0-9]+$/)]);
      this.form
        .get('address')
        ?.setValidators([Validators.required, this.whiteSpace]);
    } else {
      this.form.get('phone')?.clearValidators();
      this.form.get('address')?.clearValidators();
    }

    this.form.get('phone')?.updateValueAndValidity();
    this.form.get('address')?.updateValueAndValidity();
  }

  onSubmit() {
    console.log('form data is ', this.form.value);
  }

  resetForm() {
    this.form.reset();
  }
}

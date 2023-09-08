import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html'
})
export class DialogComponent {
  form: FormGroup;
  nombre: FormControl;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { titulo: string }
  ) {
    this.nombre = new FormControl('', Validators.required);

    this.form = fb.group({
      nombre: this.nombre
    });
  }

  onCancelarClick(): void {
    this.dialogRef.close();
  }

  onConfirmarClick(): void {
    if (this.nombre.valid) {
      this.dialogRef.close(this.nombre.value);
    }
  }
}

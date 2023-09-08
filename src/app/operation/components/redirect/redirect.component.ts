// Angular
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

// Project
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent {
  minDate: Date = new Date(2023, 0, 1);
  maxDate: Date = new Date();
  name = '';

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { titulo: 'Prueba de diálogo', nombre: 'Javier' }
    });

    dialogRef.afterClosed().subscribe(nombreIngresado => {
      if (nombreIngresado) {
        this.name = nombreIngresado;
        console.log(`Nombre ingresado: ${nombreIngresado}`);
      }
    });
  }
}

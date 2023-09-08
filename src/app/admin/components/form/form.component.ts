// Angular
import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnChanges, OnDestroy {
  value = '';
  initialValue = '';
  newValue = 'Ejemplo 1';

  ngOnInit() {
    console.log('¡Component form initialized!');
  }

  ngOnChanges() {
    console.log('The value es changed: ', this.value);
  }

  sendValue() {
    this.newValue = this.initialValue;
  }

  ngOnDestroy() {
    console.log('¡Destroying form component!');
  }
}

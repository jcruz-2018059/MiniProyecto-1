// Angular
import { Component, OnChanges, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-timeout',
  templateUrl: './timeout.component.html'
})
export class TimeoutComponent implements OnInit, OnChanges, OnDestroy {
  @Input() initialValue = 'Valor inicial por defecto';
  previousValue = '';
  currentValue = '';

  ngOnInit() {
    console.log('¡Component time out initialized!');
  }

  ngOnChanges() {
    setTimeout(() => {
      this.previousValue = this.currentValue;
      this.currentValue = this.initialValue;
    }, 3000);
    console.log(this.initialValue);
  }

  ngOnDestroy() {
    console.log('¡Destroying timeout component!');
  }
}

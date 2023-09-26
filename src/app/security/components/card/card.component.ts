import { Component, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() data: any = '';
  isOpen = false;

  formatDate(date: Date): string {
    return moment(date).format('DD/MM/YY HH:mm:ss');
  }

  openCard() {
    this.isOpen = true;
  }

  closeCard() {
    this.isOpen = false;
  }
}

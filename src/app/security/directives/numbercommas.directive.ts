// Angular
import { Directive, ElementRef, HostListener } from '@angular/core';

// Third Parties
import { __values } from 'tslib';

@Directive({
  selector: '[appNumbercommas]'
})
export class NumbercommasDirective {
  constructor(private number: ElementRef) {}

  @HostListener('blur', ['$event.target.value'])
  onBlur(value: string) {
    const valueformat = value.replace(/,/g, '');
    const formattedValue = this.formatWithCommas(valueformat);
    this.number.nativeElement.value = formattedValue;
  }

  private formatWithCommas(value: string): string {
    const parts = value.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  }
}

// Angular
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Directive({
  selector: '[appCopyicon]'
})
export class CopyiconDirective {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private snackBar: MatSnackBar
  ) {
    this.renderer.addClass(this.el.nativeElement, 'copyable');
    this.renderer.setProperty(this.el.nativeElement, 'title', 'Click to copy');
  }

  @HostListener('click')
  onClick() {
    const textToCopy = this.el.nativeElement.textContent.trim();
    const textArea = document.createElement('textarea');
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    this.snackBar.open('Copied to clipboard', 'Close', {
      duration: 2000
    });
  }
}

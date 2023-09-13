// Angular
import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appCopyicon]'
})
export class CopyiconDirective {
  private copied = false;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  @HostListener('click')
  onClick() {
    if (!this.copied) {
      const copyButton = this.renderer.createElement('button');
      this.renderer.setProperty(copyButton, 'textContent', 'Copiar');
      this.renderer.setAttribute(copyButton, 'class', 'btn btn-primary');
      this.renderer.appendChild(this.el.nativeElement, copyButton);

      const textToCopy = this.el.nativeElement.textContent;
      this.copyTextToClipboard(textToCopy);
      this.copied = true;

      copyButton.addEventListener('click', () => {
        this.renderer.removeChild(this.el.nativeElement, copyButton);
        this.copied = false;
      });
    }
  }

  private async copyTextToClipboard(text: string) {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error('No se pudo copiar el texto en el portapapeles:', err);
    }
  }
}

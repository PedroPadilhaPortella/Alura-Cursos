import { afterRender, Directive, ElementRef, input } from '@angular/core';

@Directive({
  selector: '[appDestaqueValorNumerico]'
})
export class DestaqueValorNumericoDirective {

  appDestaqueValorNumerico = input.required<number>();
  
  positiveColor = input<string>('var(--destaque-receita)');
  negativeColor = input<string>('var(--destaque-despesa)');

  constructor(elementRef: ElementRef<HTMLElement>) {
    afterRender(() => {
      if(this.appDestaqueValorNumerico() < 0) {
        elementRef.nativeElement.style.color = this.negativeColor();
      } else if(this.appDestaqueValorNumerico() > 0) {
        elementRef.nativeElement.style.color = this.positiveColor();
      }
    });
  }
}

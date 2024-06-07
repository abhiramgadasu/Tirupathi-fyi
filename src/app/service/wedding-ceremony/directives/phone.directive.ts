import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPhone]'
})
export class PhoneDirective {

  constructor(private el: ElementRef) {}
 
  @HostListener('input', ['$event']) onInputChange(event: any): void {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, '')
    value = value.substring(0, 10);
    const formattedValue = this.formatPhoneNumber(value);
    input.value = formattedValue ? formattedValue : value;
  }
  
  private formatPhoneNumber(phoneNumberString: string): string | null {
    const cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return  match[1] + ' ' + match[2] + ' ' + match[3];
    }
    return null;
  }

}

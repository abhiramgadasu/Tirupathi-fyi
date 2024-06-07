import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAddress]'
})
export class AddressDirective {

  constructor(private el: ElementRef) { }
 
  @HostListener('input', ['$event']) onInputChange(event: any): void {
    const input = event.target as HTMLInputElement;
    let value = input.value;
    value = this.formatAddress(value);
    input.value = value;
  }
 
  private formatAddress(inputString: string): string {
    // Remove unwanted special characters but keep space, comma, dash, and dot
    inputString = inputString.replace(/[^a-zA-Z0-9,\s-.]/g, '');
    // Replace multiple spaces with a single space
    inputString = inputString.replace(/\s+/g, ' ');
    // Remove leading spaces
    inputString = inputString.trimStart();
    // Capitalize the first letter of each word
    return inputString.toLowerCase().replace(/\b\w/g, (val: string) => val.toUpperCase());
  }

}

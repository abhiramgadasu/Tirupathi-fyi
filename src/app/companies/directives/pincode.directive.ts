import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appPincode]'
})
export class PincodeDirective {

  @HostListener('input', ['$event']) onInputChange(event: any): void {
    const input = event.target as HTMLInputElement;
    let value = input.value;
    value = value.replace(/[^0-9]/g, '');
    value = this.enforcePincodeLength(value);
    input.value = value;
  }
 
  private enforcePincodeLength(value: string): string {
    return value.slice(0, 6);
  }

}

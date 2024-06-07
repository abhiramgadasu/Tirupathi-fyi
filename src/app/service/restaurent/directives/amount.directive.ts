import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appAmount]'
})
export class AmountDirective {

  constructor(private el: ElementRef, private control: NgControl) {}
 @HostListener('input', ['$event'])
 
 onInputChange(event: any) {
   // Remove all characters except numbers and decimal point
   let value = event.target.value.replace(/[^0-9\.]/g, '').replace(/^0+/, '');
 
   // Split the value into whole number and decimal parts
   let [whole, decimal] = value.split('.');
 
   // Add comma separators to the whole number part
   whole = whole.replace(/\B(?=(?:(\d\d)+(\d)(?!\d))+(?!\d))/g, ',');
 
   if (decimal) {
     value = whole + '.' + decimal;
   } else {
     value = whole;
   }
   this.control.control?.setValue(value);
 }

}

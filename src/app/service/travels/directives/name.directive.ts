import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appName]'
})
export class NameDirective {

  constructor(private el: ElementRef) { }
 
  @HostListener('input', ['$event']) onInputChange(event:any): void {
    const input = event.target as HTMLInputElement;
    let  value = input.value;
    value = value.replace(/\s+/g, ' ').replace(/[^a-zA-Z ]/g, '').trimStart()
    value = this.capatalizedwords(value);
    input.value = value;
  }
 
  capatalizedwords(inputstring:any){
    return inputstring.toLowerCase().replace(/\b\w/g,(val:any)=> val.toUpperCase())
  }

}

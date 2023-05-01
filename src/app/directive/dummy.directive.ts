import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appDummy]'
})
export class DummyDirective {


  constructor(private ngControl: NgControl) { }

  @HostListener('input', ['$event']) onInputChange(event: any) {
    const initialValue = event.target.value;
    const sanitizedValue = initialValue.replace(/[^0-9]/g, '');
    if( this.ngControl.control)
    this.ngControl.control.setValue(sanitizedValue, { emitEvent: false });
   
  }

}

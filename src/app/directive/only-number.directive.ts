import { Directive, ElementRef, HostListener, Input } from '@angular/core';


@Directive({
  selector: '[appOnlyNumber]'
})
export class OnlyNumberDirective {
 
    constructor(private el: ElementRef) {}

    isSettingValue=false;
  
    @HostListener('input', ['$event']) onInputChange(event: any) {
     
      if (!this.isSettingValue) {
        this.isSettingValue = true;
        
     
      event.target.value = event.target.value.replace(/[^0-9]/g, '');
  
  
      // this.el.nativeElement.dispatchEvent(new Event('input', { bubbles: true }));
      event.target.dispatchEvent(new Event('input', { bubbles: true }));
      this.isSettingValue = false;
    }
    
  }
    
   
  
  }
  
  


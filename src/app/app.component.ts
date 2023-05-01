import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OnlyNumberDirective } from './directive/only-number.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appOnlyNumber!:OnlyNumberDirective;
  title = 'common-directiv';
  mainForm !: FormGroup;
constructor(private formBuilder : FormBuilder){
  this.mainForm = formBuilder.group({
    mobile : [''],
    otp:['']
  })
}
onSubmit(){
  console.log(this.mainForm.value)
}
divButton(){
  console.log('a');
}
pButton(){
  console.log('b');
}
}

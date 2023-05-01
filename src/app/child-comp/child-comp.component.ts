import { Component, Input } from '@angular/core';
import { DummyDirective } from '../directive/dummy.directive';
import { OnlyNumberDirective } from '../directive/only-number.directive';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.scss']
})
export class ChildCompComponent {
@Input() formName:any
@Input() placeholder !:string
// @Input() appOnlyNumber: any ;
@Input() appDummyData!: OnlyNumberDirective;
}

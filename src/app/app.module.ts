import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildCompComponent } from './child-comp/child-comp.component';
import { OnlyNumberDirective } from './directive/only-number.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DummyDirective } from './directive/dummy.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChildCompComponent,
    OnlyNumberDirective,
    DummyDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

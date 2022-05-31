import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderPersonalComponent } from './header-personal/header-personal.component';



@NgModule({
  declarations: [
    HeaderPersonalComponent
  ],
  exports: [
    HeaderPersonalComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class ComponentsModule { }

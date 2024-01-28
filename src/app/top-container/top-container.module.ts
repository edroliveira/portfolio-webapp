import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopContainerComponent } from './top-container.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    TopContainerComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    TopContainerComponent
  ]
})
export class TopContainerModule { }

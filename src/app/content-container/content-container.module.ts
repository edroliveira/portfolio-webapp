import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentContainerComponent } from './content-container.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ContentContainerComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ContentContainerComponent
  ]
})
export class ContentContainerModule { }

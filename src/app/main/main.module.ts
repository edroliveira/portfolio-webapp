import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { TopContainerModule } from '../top-container/top-container.module';
import { ContentContainerModule } from '../content-container/content-container.module';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    TopContainerModule,
    ContentContainerModule
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }

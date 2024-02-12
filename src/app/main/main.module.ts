import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { TopContainerModule } from '../top-container/top-container.module';
import { ContentContainerModule } from '../content-container/content-container.module';
import { NgxsModule } from '@ngxs/store';
import { ScrollState } from '../shared/state/scroll-state';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    TopContainerModule,
    ContentContainerModule,
    SharedModule,
    NgxsModule.forFeature([ScrollState])
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentContainerComponent } from './content-container.component';
import { SharedModule } from '../shared/shared.module';
import { ProjectsComponent } from './projects/projects.component';
import { WorkInfoComponent } from './work-info/work-info.component';



@NgModule({
  declarations: [
    ContentContainerComponent,
    ProjectsComponent,
    WorkInfoComponent
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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopContainerComponent } from './top-container.component';
import { SharedModule } from '../shared/shared.module';
import { NgxsModule } from '@ngxs/store';
import { ScreenComponentState } from '../shared/state/screen-component-state';
import { ContactInfoDialogComponent } from './dialog/contact-info-dialog/contact-info-dialog.component';

@NgModule({
  declarations: [TopContainerComponent, ContactInfoDialogComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgxsModule.forFeature([ScreenComponentState]),
  ],
  exports: [TopContainerComponent],
})
export class TopContainerModule {}

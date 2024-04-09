import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatRippleModule } from '@angular/material/core';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    LayoutModule,
    MatToolbarModule,
    MatTooltipModule,
    MatExpansionModule,
    MatDividerModule,
    MatRippleModule
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxLoadingModule,ngxLoadingAnimationTypes } from 'ngx-loading';
import { ReportsRoutingModule } from './reports-routing.module';
import { ReportComponent } from './report/report.component';

@NgModule({
  declarations: [ReportComponent],
  imports: [
    CommonModule,

    ReportsRoutingModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.rectangleBounce,
        backdropBackgroundColour: 'rgba(255,0,255,0.05)', 
        backdropBorderRadius: '4px',
        primaryColour: '#FA8072', 
        secondaryColour: '#FFD700', 
        tertiaryColour: '#FFFF00'
    }),

  ]
})
export class ReportsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxLoadingModule,ngxLoadingAnimationTypes } from 'ngx-loading';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ChartsModule } from 'ng2-charts';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
    imports: [
        CommonModule,
        DataTablesModule,
       ChartsModule,
        DashboardRoutingModule,
        NgxLoadingModule.forRoot({
            animationType: ngxLoadingAnimationTypes.rectangleBounce,
              backdropBackgroundColour: 'rgba(255,0,255,0.05)', 
              backdropBorderRadius: '4px',
              primaryColour: '#FA8072', 
              secondaryColour: '#FFD700', 
              tertiaryColour: '#FFFF00'
          }),

     
    ],
    declarations: [
        DashboardComponent,
      
    ]
})
export class DashboardModule {}

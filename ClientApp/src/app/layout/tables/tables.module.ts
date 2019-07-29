import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxLoadingModule,ngxLoadingAnimationTypes } from 'ngx-loading';
import { TablesRoutingModule } from './tables-routing.module';
import { TablesComponent } from './tables.component';
import { PageHeaderModule } from './../../shared';
import { DataTablesModule } from 'angular-datatables';
import { EmployeeComponent } from './employee/employee.component';
@NgModule({
    imports: [
         CommonModule,
         TablesRoutingModule, 
         PageHeaderModule,
         DataTablesModule,
         NgxLoadingModule.forRoot({
            animationType: ngxLoadingAnimationTypes.rectangleBounce,
              backdropBackgroundColour: 'rgba(255,0,255,0.05)', 
              backdropBorderRadius: '4px',
              primaryColour: '#FA8072', 
              secondaryColour: '#FFD700', 
              tertiaryColour: '#FFFF00'
          }),
        ],
    declarations: [TablesComponent, EmployeeComponent]
})
export class TablesModule {}

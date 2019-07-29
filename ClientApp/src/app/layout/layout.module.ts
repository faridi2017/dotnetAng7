import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxLoadingModule,ngxLoadingAnimationTypes } from 'ngx-loading';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { FormModule } from './form/form.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        FormModule,
    
        ReactiveFormsModule,
        TranslateModule,
        NgbDropdownModule,
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
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent]
})
export class LayoutModule {}

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module'
import { NgxLoadingModule,ngxLoadingAnimationTypes } from 'ngx-loading';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import {DatePipe} from '@angular/common';

 
@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        LanguageTranslationModule,
        AppRoutingModule,
        FormsModule,
      
        ReactiveFormsModule,
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
    declarations: [AppComponent],
    providers: [AuthGuard, DatePipe],
    bootstrap: [AppComponent]
})
export class AppModule {}

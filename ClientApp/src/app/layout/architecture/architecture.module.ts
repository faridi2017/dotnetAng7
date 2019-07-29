import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArchitectureRoutingModule } from './architecture-routing.module';
import { DocumentComponent } from './document/document.component';

@NgModule({
  declarations: [DocumentComponent],
  imports: [
    CommonModule,
    ArchitectureRoutingModule
  ]
})
export class ArchitectureModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageHomeComponent } from './page-home/page-home.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [
    PageHomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    PageHomeComponent
  ]
})
export class PageHomeModule { }

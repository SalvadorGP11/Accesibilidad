import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AccessComponent } from '../modules/access/access.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AccessComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    FontAwesomeModule,
    MatIconModule,
    MatMenuModule

  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    AccessComponent
  ]

 
})
export class SharedModule { }

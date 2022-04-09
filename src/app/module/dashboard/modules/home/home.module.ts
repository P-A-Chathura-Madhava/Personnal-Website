import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { AboutMeModalComponent } from './modal/about-me-modal/about-me-modal.component';
import {MatDialogModule} from "@angular/material/dialog";


@NgModule({
  declarations: [
    HomeComponent,
    AboutMeModalComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class HomeModule { }

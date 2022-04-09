import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { ProjectOneComponent } from './modal/project-one/project-one.component';
import {MatDialogModule} from "@angular/material/dialog";


@NgModule({
  declarations: [
    PortfolioComponent,
    ProjectOneComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    MatDialogModule
  ]
})
export class PortfolioModule { }

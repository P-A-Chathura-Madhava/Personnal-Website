import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ProjectOneComponent} from "./modal/project-one/project-one.component";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openModal() {
      this.dialog.open(ProjectOneComponent);
  }
}

import { Component, OnInit } from '@angular/core';
import {SideBarComponent} from "../../component/side-bar/side-bar.component";
import {MatDialog} from "@angular/material/dialog";
import {AboutMeModalComponent} from "./modal/about-me-modal/about-me-modal.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }


  openModal() {
      this.dialog.open(AboutMeModalComponent);
  }
}

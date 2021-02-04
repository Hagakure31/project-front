import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewOrEditRowComponent } from '../new-or-edit-row/new-or-edit-row.component';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  @ViewChild(TableComponent) child!: TableComponent;
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(NewOrEditRowComponent);
    dialogRef.afterClosed().subscribe((response) => {
      console.log(response);
      if (response.event == 'Create') {
        this.child.createRow(response.data);
      }
    });
  }
}

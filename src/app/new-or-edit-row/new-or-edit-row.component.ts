import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-new-or-edit-row',
  templateUrl: './new-or-edit-row.component.html',
  styleUrls: ['./new-or-edit-row.component.css'],
})
export class NewOrEditRowComponent implements OnInit {
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;
  form: FormGroup = new FormGroup({
    ecu_name: new FormControl('', [
      Validators.required,
      Validators.maxLength(30),
    ]),
  });

  constructor(public dialogRef: MatDialogRef<NewOrEditRowComponent>) {}

  ngOnInit() {
    this.filteredOptions = this.form.get('ecu_name').valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(
      (option) => option.toLowerCase().indexOf(filterValue) === 0
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { PucConfigurationDataService } from '../service/part/puc_configuration_data.service';

@Component({
  selector: 'app-new-or-edit-row',
  templateUrl: './new-or-edit-row.component.html',
  styleUrls: ['./new-or-edit-row.component.css'],
})
export class NewOrEditRowComponent implements OnInit {
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptionsEcu: Observable<string[]>;
  filteredOptionsConfigDiagitems: Observable<string[]>;
  filteredOptionsOptionValuewrite: Observable<string[]>;
  filteredOptionsOptionText: Observable<string[]>;
  filteredOptionsRoyaltyPartnr: Observable<string[]>;
  filteredOptionsDescriptionFr: Observable<string[]>;
  filteredOptionsDescriptionEn: Observable<string[]>;
  filteredOptionsRoyaltyMtcScr: Observable<string[]>;
  filteredOptionsComment: Observable<string[]>;

  ecu_names$: Observable<string[]>;

  form: FormGroup = new FormGroup({
    ecu_name: new FormControl('', [
      Validators.required,
      Validators.maxLength(30),
    ]),
    config_diagitem: new FormControl('', [
      Validators.required,
      Validators.maxLength(30),
    ]),
    option_valuewrite: new FormControl('', [
      Validators.required,
      Validators.maxLength(30),
    ]),
    Option_text: new FormControl('', [
      Validators.required,
      Validators.maxLength(30),
    ]),
    royalty_part_nr: new FormControl('', [
      Validators.required,
      Validators.maxLength(30),
    ]),
    part_description_fr: new FormControl('', [
      Validators.required,
      Validators.maxLength(30),
    ]),
    part_description_en: new FormControl('', [
      Validators.required,
      Validators.maxLength(30),
    ]),
    royalty_mtc_scr: new FormControl('', [
      Validators.required,
      Validators.maxLength(30),
    ]),
    Comment: new FormControl('', [
      Validators.required,
      Validators.maxLength(30),
    ]),
  });

  constructor(
    public dialogRef: MatDialogRef<NewOrEditRowComponent>,
    private pucConfigurationDataService: PucConfigurationDataService
  ) {}

  private _filter(value: string, options: string[]): string[] {
    const filterValue = value.toLowerCase();

    return options.filter(
      (option) => option.toLowerCase().indexOf(filterValue) === 0
    );
  }

  public onEcuNameSelected(event: MatAutocompleteSelectedEvent) {
    console.log(event.option.value);
    this.pucConfigurationDataService
      .getConfigDiagitems(event.option.value)
      .subscribe((options) => {
        this.filteredOptionsConfigDiagitems = this.optionsSorter(
          'config_diagitem',
          options
        );
      });
  }

  private optionsSorter(
    field: string,
    options: string[]
  ): Observable<string[]> {
    return this.form.get(field).valueChanges.pipe(
      startWith(''),
      map((value: string) => this._filter(value, options))
    );
  }

  ngOnInit() {
    this.pucConfigurationDataService.getEcuNames().subscribe((options) => {
      this.filteredOptionsEcu = this.optionsSorter('ecu_name', options);
    });

    // this.filteredOptionsConfigDiagitems = this.optionsSorter(
    //   'config_diagitem',
    //   this.options
    // );
    this.filteredOptionsOptionValuewrite = this.optionsSorter(
      'option_valuewrite',
      this.options
    );
    (this.filteredOptionsOptionText = this.optionsSorter(
      'Option_text',
      this.options
    )),
      this.options;
    this.filteredOptionsRoyaltyPartnr = this.optionsSorter(
      'royalty_part_nr',
      this.options
    );
    this.filteredOptionsDescriptionFr = this.optionsSorter(
      'part_description_fr',
      this.options
    );
    this.filteredOptionsDescriptionEn = this.optionsSorter(
      'part_description_en',
      this.options
    );
    this.filteredOptionsRoyaltyMtcScr = this.optionsSorter(
      'royalty_mtc_scr',
      this.options
    );
    this.filteredOptionsComment = this.optionsSorter('Comment', this.options);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

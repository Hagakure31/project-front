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
import { PartService } from '../service/part/part.service';

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
  previousState: any = {
    ecu_name: '',
    config_diagitem: '',
    option_valuewrite: '',
  };

  partPreviousState: any = {
    royalty_part_nr: '',
    part_description_fr: '',
    part_description_en: '',
  };

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
    Option_text: new FormControl({ value: '', disabled: true }, [
      Validators.required,
      Validators.maxLength(30),
    ]),
    royalty_part_nr: new FormControl('', [
      Validators.required,
      Validators.maxLength(30),
    ]),
    part_description_fr: new FormControl({ value: '', disabled: true }, [
      Validators.required,
      Validators.maxLength(30),
    ]),
    part_description_en: new FormControl({ value: '', disabled: true }, [
      Validators.required,
      Validators.maxLength(30),
    ]),
    royalty_mtc_scr: new FormControl({ value: '.', disabled: true }, [
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
    private pucConfigurationDataService: PucConfigurationDataService,
    private partService: PartService
  ) {}

  private _filter(value: string, options: string[]): string[] {
    const filterValue = value.toLowerCase();

    return options.filter(
      (option) => option.toLowerCase().indexOf(filterValue) === 0
    );
  }

  public onEcuNameSelected(event: MatAutocompleteSelectedEvent) {
    if (event.option.value === this.previousState.ecu_name) {
      return;
    }
    this.previousState.ecu_name = event.option.value;
    this.pucConfigurationDataService
      .getConfigDiagitems(event.option.value)
      .subscribe((options) => {
        this.filteredOptionsConfigDiagitems = this.optionsSorter(
          'config_diagitem',
          options
        );
      });
  }

  public onConfigDiagitemSelected(
    event: MatAutocompleteSelectedEvent,
    selectedEcu: string
  ) {
    if (event.option.value === this.previousState.config_diagitem) {
      return;
    }
    this.previousState.config_diagitem = event.option.value;
    this.pucConfigurationDataService
      .getOptionValuewrite(selectedEcu, event.option.value)
      .subscribe((options) => {
        this.filteredOptionsOptionValuewrite = this.optionsSorter(
          'option_valuewrite',
          options
        );
      });
  }

  public onOptionValuewriteSelected(
    event: MatAutocompleteSelectedEvent,
    selectedEcu: string,
    selectedConfigDiagitem: string
  ) {
    // console.log(event, selectedEcu, selectedConfigDiagitem);
    if (event.option.value === this.previousState.option_valuewrite) {
      return;
    }
    this.previousState.option_valuewrite = event.option.value;

    this.pucConfigurationDataService
      .getOptionText(selectedEcu, selectedConfigDiagitem, event.option.value)
      .subscribe((response) => {
        this.form.get('Option_text').setValue(response.selectedOptionText);
      });
  }

  public onRoyaltyPartNrSelected(event: MatAutocompleteSelectedEvent) {
    if (event.option.value === this.partPreviousState.royalty_part_nr) {
      return;
    }

    this.partPreviousState.royalty_part_nr = event.option.value;
    this.partService
      .getPartDescriptions(event.option.value)
      .subscribe((response) => {
        this.form.get('part_description_fr').setValue(response.descriptionFr);
        this.form.get('part_description_en').setValue(response.descriptionEn);
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

    this.partService.getRoyaltyPartNumbers().subscribe((options) => {
      this.filteredOptionsRoyaltyPartnr = this.optionsSorter(
        'royalty_part_nr',
        options
      );
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

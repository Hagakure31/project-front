import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

const matModule = [
  MatDialogModule,
  MatFormFieldModule,
  MatButtonModule,
  MatTableModule,
  MatInputModule,
  MatAutocompleteModule,
];

@NgModule({
  imports: [...matModule],
  exports: matModule,
})
export class MaterialModule {}

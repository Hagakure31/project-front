import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const matModule = [
  MatDialogModule,
  MatFormFieldModule,
  MatButtonModule,
  MatTableModule,
  MatInputModule,
  MatAutocompleteModule,
  MatToolbarModule,
  MatSidenavModule,
  MatSnackBarModule,
];

@NgModule({
  imports: [...matModule],
  exports: matModule,
})
export class MaterialModule {}

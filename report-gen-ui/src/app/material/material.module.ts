import { NgModule } from '@angular/core';
import {CdkTableModule} from '@angular/cdk/table';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatListModule,
  MatChipsModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatTooltipModule,
  MatAutocompleteModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatSidenavModule,
  MatTableModule,
  MatButtonToggleModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatChipsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatTableModule,
    CdkTableModule,
  ],
  exports: [
    MatButtonModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatChipsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatTableModule,
    CdkTableModule,
      
  ]
})
export class MaterialModule {}

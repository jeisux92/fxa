import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialDesignFrameworkModule } from 'angular2-json-schema-form-gabe';
import { FlexLayoutModule } from '@angular/flex-layout';
import { JsonSchemaFormModule } from 'angular2-json-schema-form-gabe';
import {
  MatButtonToggleModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatDividerModule,
  MatListModule,
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatTabsModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatCheckboxModule,
  MatIconModule,
  MatIconRegistry,
  MatTooltipModule
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { CUSTOM_WIDGETS } from './custom-widgets';
import { FocusDirective } from './custom-widgets/verification/focus.directive';
import { DocumentReviewComponent } from './custom-widgets/document-review/document-review.component';
import { NumberFormatComponent } from './custom-widgets/number-format/number-format.component';
import localeesCO from '@angular/common/locales/es-CO';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeesCO);
import { BooleanInputInfoComponent } from './custom-widgets/boolean-input-info/boolean-input-info.component';
import { SelectUrlComponent } from './custom-widgets/select-url/select-url.component';
import { ListsService } from './custom-widgets/services/lists.service';




@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    CdkTableModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule,
    MatTabsModule,
    MatCardModule,
    MatProgressSpinnerModule,
    FlexLayoutModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatRadioModule,
    MatCheckboxModule,
    MatIconModule,
    MatTooltipModule
  ],
  exports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    CdkTableModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    ...CUSTOM_WIDGETS,
    FlexLayoutModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatRadioModule,
    MatCheckboxModule,
    MatIconModule,
    MatTooltipModule
  ],
  declarations: [...CUSTOM_WIDGETS, FocusDirective, SelectUrlComponent],
  entryComponents: [...CUSTOM_WIDGETS],
  providers: [
    ListsService,
    { provide: LOCALE_ID, useValue: 'es-CO' }
  ]
})

export class SharedModule {
  constructor(private _matIconRegistry: MatIconRegistry) {
    _matIconRegistry.registerFontClassAlias('fontawesome', 'fa')
  }

}

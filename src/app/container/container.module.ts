import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MaterialDesignFrameworkModule, JsonSchemaFormModule } from 'angular2-json-schema-form-gabe';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { RetakeComponent } from './retake/retake.component';
import { MatIconRegistry } from '@angular/material';
import { ThankYouPageComponent } from './thank-you-page/thank-you-page.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

const ROUTES: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'formulario/:requestCode', component: HomeComponent, pathMatch: 'full' },
  { path: 'retomar', component: RetakeComponent, pathMatch: 'full' },
  { path: 'thankyoupage/:SId/:RcId/:RfId', component: ThankYouPageComponent, pathMatch: 'full' },
  { path: 'codeudor/:simpleId', component: HomeComponent, pathMatch: 'full' },
  { path: 'confirmation/:SId', component: ConfirmationComponent, pathMatch: 'full' },
];
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(ROUTES),
    MaterialDesignFrameworkModule, JsonSchemaFormModule.forRoot(MaterialDesignFrameworkModule),
  ],
  declarations: [
    HomeComponent,
    RetakeComponent,
    ThankYouPageComponent,
    ConfirmationComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: []
})
export class ContainerModule {
  constructor(private matIconRegistry: MatIconRegistry) {
    matIconRegistry.registerFontClassAlias('fontawesome', 'fa')
  }

}

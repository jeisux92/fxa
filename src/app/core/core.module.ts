import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormService } from './services/form.service';
import { BidirectionalService } from './services/bidirectional.service';
import { InterceptorsService } from './services/interceptors.service';
import { SimulatorService } from './services/simulator.service';
import { StorageService } from './services/storage.service';
import { ReferenceService } from './services/reference.service';
import { SwalService } from './services/swal.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    FormService,
    BidirectionalService,
    SimulatorService,
    ReferenceService,
    StorageService,
    SwalService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorsService, multi: true }
  ],
  declarations: []
})
export class CoreModule { }

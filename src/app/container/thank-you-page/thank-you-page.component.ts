import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReferenceService } from '../../core/services/reference.service';

@Component({
  selector: 'fna-thank-you-page',
  templateUrl: './thank-you-page.component.html',
  styleUrls: ['./thank-you-page.component.scss']
})
export class ThankYouPageComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private _ReferenceService: ReferenceService) { }

  private message: string;
  private name: string;
  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {

      const dataReference = {
        ExecutionId: params.SId,
        ReferenceId: params.RcId,
        ReferredId: params.RfId,
        ScopeName: "Coodeudor"
      }
      if (!dataReference.ExecutionId || !dataReference.ReferenceId || !dataReference.ReferredId) {
        this.message = "Error al intentar confirmar la referencia, intente nuevamente.";
      }    

      this._ReferenceService.reference(dataReference).subscribe(
        (response: any) => {
          if (!response || response.message.length == 0) {
            this.message = "Se ha confirmado la referencia con existo.";
          } else {
            this.message = response.message;
          }
        });

    });

  }

}

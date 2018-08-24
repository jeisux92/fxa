import { Component, OnInit, Renderer2, Input } from '@angular/core';
import { JsonSchemaFormService } from 'angular2-json-schema-form-gabe';
import { AbstractControl } from '@angular/forms';
import { SimulatorService } from '../../../core/services/simulator.service';
import { ISimulator } from '../../../core/interfaces/simulator';
declare const window;
@Component({
  selector: 'fna-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.scss']
})
export class SimulatorComponent implements OnInit {
  formControl: AbstractControl;
  controlValue: any;
  button: number;
  AfterTime: ISimulator;
  InTime: ISimulator;
  Total: ISimulator;
  Monto: number;
  //
  Finalidad = '';
  TipoSolicitud = '';
  MontoMaximo = '';
  Periocidad = '';
  NPeriodos = '';
  subString1 = '';
  subString2 = '';

  PorcentajePrestamo: number;
  Plazo: number;
  CuotaMensual: number;



  @Input() layoutNode: any;

  options: any = {};
  items: any[] = [];


  get Finalidades() {
    return this.items.find((x: any) => x.name == 'Finalidad').options.oneOf;
  }

  get TipoSolicitudes() {
    return this.items.find((x: any) => x.name == 'TipoSolicitud').options.oneOf;

  }

  get Periocidades() {
    return this.items.find((x: any) => x.name == 'Periocidad').options.oneOf;
  }



  get TasaEA() {
    return this.formControl.value.TasaEA;
  }

  get TasaM() {
    return this.formControl.value.TasaM;
  }

  constructor(private jsf: JsonSchemaFormService, private renderer: Renderer2, private _simulatorService: SimulatorService) {

  }

  ngOnInit() {
    this.options = this.layoutNode.options || {};
    this.items = this.layoutNode.items || [];
    this.jsf.initializeControl(this);

    this.Finalidad = this.Finalidades[0].const;
    this.TipoSolicitud = this.TipoSolicitudes[0].const;
    this.Periocidad = this.Periocidades[0].const;

  }

  updateValues(event) {
    this.formControl.patchValue({
      RequestType: this.TipoSolicitud == '1' || this.TipoSolicitud == '3' ?
        'I' : 'C'
    })
    this.formControl.patchValue({
      DebtorType: this.TipoSolicitud == '1' || this.TipoSolicitud == '3' ?
        'D' : 'C'
    });
    this.jsf.updateValue(this, this.controlValue);
  }

  change(id) {


  }

  valid(e) {
    if (e.keyCode >= 48 && e.keyCode <= 57) {
      if (e.target.id == 'MontoMaximo') {
        this.subString1 = this.subString1 + e.key;
        if (this.subString1.length > 9) {
          e.preventDefault();
        }
      }
      if (e.target.id == 'NPeriodos') {
        this.subString2 = this.subString2 + e.key;
        if (this.subString2.length > 9) {
          e.preventDefault();
        }
      }
      return;
    }
    return false;

  }

  backspace(e) {
    if (e.key == 'Backspace') {
      if (e.target.id == 'MontoMaximo') {
        this.subString1 = this.subString1 = this.subString1.substr(0, this.subString1.length - 1);
      }
      if (e.target.id == 'NPeriodos') {
        this.subString2 = this.subString2 = this.subString2.substr(0, this.subString2.length - 1);
      }
    }
  }
  search() {
    const dataSimulator =
    {
      RequestType: this.TipoSolicitud,
      DataSimulation: {
        Periodicity: this.Periocidad,
        NumberPeriods: this.NPeriodos,
        AmountByPeriod: this.MontoMaximo,
        DestinyCreditStudent: this.Finalidad
      },
      DestinyCreditStudent: this.Finalidad,
      Affiliates: [
        {
          FirstName: this.controlValue.Affiliates.CreditTaker === 'si' ?
            this.controlValue.Affiliates.FirstNameB : this.controlValue.Affiliates.FirstNameA,
          LastName: this.controlValue.Affiliates.CreditTaker === 'si' ?
            this.controlValue.Affiliates.LastNameB : this.controlValue.Affiliates.LastNameA,
          SecondLastName: this.controlValue.Affiliates.CreditTaker === 'si' ?
            this.controlValue.Affiliates.SecondLastNameB : this.controlValue.Affiliates.SecondLastNameA,
          Identification: this.controlValue.Affiliates.CreditTaker === 'si' ?
            this.controlValue.Affiliates.IdentificationB : this.controlValue.Affiliates.IdentificationA,
          IsMain: this.controlValue.Affiliates.IsMain,
          Applicant: this.controlValue.Affiliates.Applicant,
          TotalIncome: this.controlValue.Affiliates.CreditTaker === 'si' ?
            this.controlValue.Affiliates.TotalIncomeB : this.controlValue.Affiliates.TotalIncomeA,
          TotalExpense: this.controlValue.Affiliates.CreditTaker === 'si' ?
            this.controlValue.Affiliates.TotalExpenseB : this.controlValue.Affiliates.TotalExpenseA,
          ProspectaResponse: this.controlValue.Affiliates.ProspectaResponse
        }
      ]
    }
      ;
    this._simulatorService.simulation(dataSimulator).subscribe(x => {
      //Map intime
      this.InTime = this.mapResult(x[0].inTime);
      //Map aftertime
      this.AfterTime = this.mapResult(x[0].afterTime)
      //Map Total
      this.Total = this.mapResult(x[0]);


      //Simulo el click en el primer tab para solucinar un bug de visualización de datos al momento de 
      //consultar el simulador
      let element: HTMLElement = document.getElementById('mat-tab-label-0-0') as HTMLElement;
      element.click();
    });
  }

  mapResult(data): ISimulator {
    return {
      amountByPeriod: data.amountByPeriod,
      amountTotal: data.amountTotal,
      limit: data.limit,
      numberDisbursement: data.numberDisbursement,
      percentage: data.percentage,
      quota: data.quota
    }
  }
}

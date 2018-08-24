import { Component, OnInit, Input, LOCALE_ID, Renderer2 } from '@angular/core';
import { JsonSchemaFormService } from 'angular2-json-schema-form-gabe';
import { SimulatorService } from '../../../core/services/simulator.service';
import { AbstractControl, FormControl, Validators } from '@angular/forms';
declare const window;

@Component({
    selector: 'fna-number-format',
    templateUrl: './number-format.component.html',
    styleUrls: ['./number-format.component.scss']
})
export class NumberFormatComponent implements OnInit {

    layoutNode: any;
    items: any;
    options: any;
    montoString: string = "";
    formControl: FormControl;
    formMask: FormControl;
    prueba: string;
    data: any;
    fecha: any;
    inputAmount: string = null;
    inputAmountFormat: string;
    textToearn: string;
    separador: ","; // separador para los miles
    sepDecimal: '.'; // separador para los decimales
    public i: number = 0
    public _i: number = 0

    //variables de validación 
    numberValidation: any;
    maxLength: any;
    minLength: any;
    constructor(private jsf: JsonSchemaFormService, private renderer: Renderer2, private _simulatorService: SimulatorService) {
    }


    get Title() {
        return this.options.title;
    }
    get Required() {
        return this.options.required;
    }
    ngOnInit() {
        this.options = this.layoutNode.options || {};
        this.items = this.layoutNode.items || [];
        this.jsf.initializeControl(this);
        if (!this.options.notitle && !this.options.description && this.options.placeholder) {
            this.options.description = this.options.placeholder;
        }

        this.formMask = new FormControl([
            Validators.minLength(this.options.minLength),
            Validators.maxLength(this.options.maxLength),
            Validators.required
        ]);
        this.minLength = this.options.validationMessages.minLength.replace('{{minimumLength}}', this.options.minLength);
        this.maxLength = this.options.validationMessages.maxLength.replace('{{maximumLength}}', this.options.maxLength);
        this.numberValidation = this.options.validationMessages;
        window.renderer = this.renderer;

    }

    calculate(ev: KeyboardEvent) {

        if (ev.keyCode >= 48 && ev.keyCode <= 57 || ev.keyCode >= 96 && ev.keyCode <= 105 || ev.key == "Backspace") {
            var amount = +ev.key

            if (isNaN(amount)) {
                if (this.i > 0) {
                    this._i++;

                    if (this._i = 1) {
                        this.montoString = this.montoString.slice(0, -1);
                        this.inputAmount = this.inputAmount.slice(0, -1);
                        this._i = 0;
                    } else {
                        this.montoString = this.montoString.slice(0, -1);
                        this.inputAmount = this.inputAmount.slice(0, -1);
                    }
                } else {
                    if (this.montoString) {
                        this.montoString = this.montoString.slice(0, -1);
                        this.inputAmount = this.inputAmount.slice(0, -1);
                        this._i = 0;
                        let aux = this.montoString.replace('.', '');
                        this.inputAmount = this.amount(+aux);
                    }
                }
                this.textToearn = '0.00'
            } else {
                this.AmountString(amount);
            }
            this.jsf.updateValue(this, this.montoString);

        } else {
            return false;
        }


    }
    private AmountString(amount: number) {
        this.montoString = this.montoString + amount;
        amount = Number(this.montoString);
        if (amount !== null && !isNaN(amount)) {
            this.i++;
            let amountResult = amount * this.data;
            this.textToearn = this.amount(amountResult);
            this.inputAmount = this.amount(amount);
            this.i = 0;
        }
        if (amount == null) {
            this.i++;
            let amountResult = +this.montoString * this.data;
            this.textToearn = this.amount(amountResult);
            this.inputAmount = this.amount(amount);
            this.i = 0;
        }
    }

    private amount(amount) {
        amount += ''; // por si pasan un numero en vez de un string
        amount = parseFloat(amount.replace(/[^0-9\.]/g, '')); // elimino cualquier cosa que no sea numero o punto

        // si no es un numero o es igual a cero retorno el mismo cero
        if (isNaN(amount) || amount === 0)
            amount = parseFloat("0");

        // si es mayor o menor que cero retorno el valor formateado como numero
        amount = '' + parseFloat(amount);

        var amount_parts = amount.split(','),
            regexp = /(\d+)(\d{3})/;

        while (regexp.test(amount_parts[0]))
            amount_parts[0] = amount_parts[0].replace(regexp, '$1' + '.' + '$2');

        let stringAmount = amount_parts.join(',');
        return stringAmount
    }

    getErrorMessage() {
        return this.formMask.hasError('required') ? this.numberValidation.required :
            this.formMask.hasError('pattern') ? this.numberValidation.pattern :
                this.formMask.hasError('minlength') ? this.minLength :
                    this.formMask.hasError('maxlength') ? this.maxLength : '';

    }
}
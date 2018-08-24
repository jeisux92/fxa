import { Component, OnInit, Renderer, ElementRef, Directive } from '@angular/core';
import { JsonSchemaFormService } from 'angular2-json-schema-form-gabe';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
declare const window;
@Component({
    selector: 'fna-verification',
    templateUrl: './verification.component.html',
    styleUrls: ['./verification.component.scss'],
})
export class VerificationComponent implements OnInit {

    layoutNode: any;
    items: any;
    options: any;
    number = [0, 0, 0, 0];
    validate: string;
    aux = 0;
    modelForm: FormGroup;
    private requestCode0: number;
    private requestCode1: number;
    private requestCode2: number;
    private requestCode3: number;

    constructor(private jsf: JsonSchemaFormService, private renderer: Renderer, private el: ElementRef, private formBuilder: FormBuilder) {
        this.modelForm = this.formBuilder.group({
            requestCode1: '',
            requestCode2: '',
            requestCode3: '',
            requestCode4: ''
        });
    }

    get title() {
        return this.options.title;
    }


    get errorList() {
        return this.items;
    }
    ngOnInit() {
        this.options = this.layoutNode.options || {};
        this.items = this.layoutNode.items || [];
        this.jsf.initializeControl(this);
        if (!this.options.notitle && !this.options.description && this.options.placeholder) {
            this.options.description = this.options.placeholder;
        }
        window.renderer = this.renderer;
    }

    keyup(e) {
        if (e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode >= 96 && e.keyCode <= 105) {
            if (+e.key == 0 || +e.key) {
                this[`requestCode${+e.target.id}`] = e.key;
                if (+this.aux >= 0 && +this.aux < 4) {
                    this.number[+e.target.id] = (this[`requestCode${+e.target.id}`]);
                    this.aux++;
                }

                if (+this.aux == 4) {
                    this.number[e.target.id] = +e.key;
                }

                let tempString = this.number.join();
                tempString = tempString.replace(/,/g, '');

                this.validate = tempString;
                this.jsf.updateValue(this, tempString);
                return true;
            }
        }
        return false;
    }


    sendCode(e) {
        if (!this.validate || +this.validate.length != 4) {
            return false;
        }
        return;
    }

}

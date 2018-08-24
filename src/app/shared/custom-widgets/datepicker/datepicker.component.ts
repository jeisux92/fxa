import { Component, OnInit, Input, Renderer2, ViewEncapsulation } from '@angular/core';
import { JsonSchemaFormService } from 'angular2-json-schema-form-gabe';
import { FormControl, AbstractControl } from '@angular/forms';

declare const window;
@Component({
  selector: 'fna-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class DatePickerComponent implements OnInit {

  required: string;
  options: any = {};
  items: any[] = [];
  @Input() layoutNode: any;
  formControl: AbstractControl;
  controlName: string;
  maxDate: any;
  minDate: Date;
  constructor(private jsf: JsonSchemaFormService, private renderer: Renderer2) {
  }

  get title() {
    return this.options.title;
  }
  get subtitle() {
    return this.options.subtitle;
  }

  get type() {
    return this.options.error;
  }


  get errorList() {
    return this.items;
  }
  ngOnInit() {
    this.options = this.layoutNode.options || {};
    this.items = this.layoutNode.items || [];
    this.jsf.initializeControl(this);
    this.maxDate = this.options.maxDateOpt ? this.options.maxDateOpt.today ? new Date() : new Date(this.options.maxDateOpt.value) : null;
    if (this.options.maxDateOpt.yearsBefore) {
      let date = new Date();
      date.setFullYear(((new Date()).getFullYear() - 100));
      this.minDate = date;
    }

    window.renderer = this.renderer;
    this.required = this.options.required;

  }
}

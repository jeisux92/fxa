import { Component, OnInit, Renderer2, ElementRef, HostListener } from '@angular/core';
import { JsonSchemaFormService } from 'angular2-json-schema-form-gabe';
import { AbstractControl, Validators, FormControl } from '@angular/forms';
declare const window;

@Component({
  selector: 'fna-input-info',
  templateUrl: './input-info.component.html',
  styleUrls: ['./input-info.component.scss']
})
export class InputInfoComponent implements OnInit {
  numberValidation: any;
  maxLength: any;
  minLength: any;
  innerWidth: any;
  required: string;
  layoutNode: any;
  items: any;
  options: any;
  formControl: AbstractControl;
  showMesssage = false;
  coordinate: any = {
    x: 0,
    y: 0
  };

  get Title() {
    return this.options.title;
  }

  get Required() {
    return this.options.required;
  }
  get HelpMessage() {
    return this.options.helpMessage;
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }
  constructor(private jsf: JsonSchemaFormService, private renderer: Renderer2) {
  }

  FormControl = new FormControl('', [
    Validators.required
  ]);


  ngOnInit() {
    this.options = this.layoutNode.options || {};
    this.items = this.layoutNode.items || [];
    this.jsf.initializeControl(this);
    if (!this.options.notitle && !this.options.description && this.options.placeholder) {
      this.options.description = this.options.placeholder;
    }
    this.minLength = this.options.validationMessages.minLength.replace('{{minimumLength}}', this.options.minLength);
    this.maxLength = this.options.validationMessages.maxLength.replace('{{maximumLength}}', this.options.maxLength);
    this.numberValidation = this.options.validationMessages;

    window.renderer = this.renderer;
    this.required = this.options.required;
  }
  showMe(event) {
    var clientWidth = innerWidth;

    this.coordinate.x = (clientWidth - event.clientX) - 180 < 0 ? -215 : 0;
    this.coordinate.y = this.coordinate.x == 0 ? 0 : -50;
    this.showMesssage = !this.showMesssage;
  }
}

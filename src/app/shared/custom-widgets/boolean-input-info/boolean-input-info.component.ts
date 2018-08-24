import { Component, OnInit, Renderer2, HostListener } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { JsonSchemaFormService } from 'angular2-json-schema-form-gabe';
declare const window;

@Component({
  selector: 'fna-boolean-input-info',
  templateUrl: './boolean-input-info.component.html',
  styleUrls: ['./boolean-input-info.component.scss']
})
export class BooleanInputInfoComponent implements OnInit {
  innerWidth: any;
  required: string;
  layoutNode: any;
  items: any;
  boolean: boolean;
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

  ngOnInit() {
    this.options = this.layoutNode.options || {};
    this.items = this.layoutNode.items || [];
    this.jsf.initializeControl(this);
    if (!this.options.notitle && !this.options.description && this.options.placeholder) {
      this.options.description = this.options.placeholder;
    }
    window.renderer = this.renderer;
    this.required = this.options.required;
    this.boolean = false;
  }
  showMe(event) {
    var clientWidth = innerWidth;

    this.coordinate.x = (clientWidth - event.clientX) - 180 < 0 ? -215 : 0;
    this.coordinate.y = this.coordinate.x == 0 ? 0 : 72;
    this.showMesssage = !this.showMesssage;
  }

  change(event) {
    this.jsf.updateValue(this, this.boolean);
  }
}

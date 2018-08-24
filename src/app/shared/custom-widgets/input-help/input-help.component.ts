import { Component, OnInit, Renderer2 } from '@angular/core';
import { JsonSchemaFormService } from 'angular2-json-schema-form-gabe';

declare const window;

@Component({
  selector: 'fn-input-help',
  templateUrl: './input-help.component.html',
  styleUrls: ['./input-help.component.scss']
})
export class InputHelpComponent implements OnInit {

  layoutNode: any;
  items: any;
  options: any;
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
  }
}

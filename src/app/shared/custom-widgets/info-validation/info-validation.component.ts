import { Component, OnInit, Renderer } from '@angular/core';
import { JsonSchemaFormService } from 'angular2-json-schema-form-gabe';

declare const window;
@Component({
  selector: 'fna-info-validation',
  templateUrl: './info-validation.component.html',
  styleUrls: ['./info-validation.component.scss']
})

export class InfoValidationComponent implements OnInit {
  
  layoutNode: any;
  items: any;
  options: any;
  constructor(private jsf: JsonSchemaFormService, private renderer: Renderer) { }

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

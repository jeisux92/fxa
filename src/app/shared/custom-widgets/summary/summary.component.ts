import { Component, OnInit, Input, Renderer2 } from '@angular/core';
import { JsonSchemaFormService } from 'angular2-json-schema-form-gabe';

declare const window;


@Component({
  selector: 'fna-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  @Input() layoutNode: any;

  get PersonalInfo() {
    return this.options.summary;
  }
  get steps() {
    return this.options.steps;

  }
  options: any = {};
  items: any[] = [];
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

import { Component, OnInit, Renderer2, Input } from '@angular/core';
import { JsonSchemaFormService } from 'angular2-json-schema-form-gabe';

declare const window;


@Component({
  selector: 'fna-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  options: any = {};
  items: any[] = [];
  @Input() layoutNode: any;

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
  get exit() {
    return this.options.exit;
  }

  get url() {
    return this.options.url;
  }

  get buttonTitle(){
    return this.options.buttonExit;
  }

}

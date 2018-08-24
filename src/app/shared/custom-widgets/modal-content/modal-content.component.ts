import { Component, OnInit, Renderer2 } from '@angular/core';
import { JsonSchemaFormService } from 'angular2-json-schema-form-gabe';
import { AbstractControl } from '@angular/forms';
declare const window;
@Component({
  selector: 'fna-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.scss']
})
export class ModalContentComponent implements OnInit {
  formControl: AbstractControl;
  checked = false;
  layoutNode: any;
  items: any;
  options: any;
  active = true;
  get content() {
    return this.options.content;
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

  }
  change(event) {
    this.jsf.updateValue(this, event.checked);

  }
}

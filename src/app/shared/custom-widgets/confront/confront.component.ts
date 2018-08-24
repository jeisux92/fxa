import { Component, OnInit, Input, Renderer2 } from '@angular/core';
import { JsonSchemaFormService } from 'angular2-json-schema-form-gabe';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
declare const window;

@Component({
  selector: 'fna-confront',
  templateUrl: './confront.component.html',
  styleUrls: ['./confront.component.scss']
})
export class ConfrontComponent implements OnInit {
  options: any = {};
  @Input() layoutNode: any;
  formControl: FormGroup;
  questionId: FormControl
  question;
  value: any = {};
  replace = [];
  get Required() {
    return this.options.required;
  }
  answers: any;
  constructor(private jsf: JsonSchemaFormService, private renderer: Renderer2) {
  }
  ngOnInit() {
    this.options = this.layoutNode.options || {};
    this.answers = this.options.questions;

    this.jsf.initializeControl(this);
    if (!this.options.notitle && !this.options.description && this.options.placeholder) {
      this.options.description = this.options.placeholder;
    }
    window.renderer = this.renderer;


    this.answers.forEach(x => {
      this.replace.push(
        {
          questionId: this.options.Id,
          optionId: x.const,
          title: x.title
        })
    })
    this.question = this.replace[0];
    this.jsf.updateValue(this, this.question);
  }
  change() {
    this.jsf.updateValue(this, this.question);
  }
}

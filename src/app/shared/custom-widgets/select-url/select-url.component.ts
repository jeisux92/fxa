import { Component, OnInit, Renderer2 } from '@angular/core';
import { JsonSchemaFormService } from 'angular2-json-schema-form-gabe';
import { ListsService } from '../services/lists.service';
import { FormControl, AbstractControl, Validators } from '@angular/forms';
declare const window;

@Component({
  selector: 'fna-select-url',
  templateUrl: './select-url.component.html',
  styleUrls: ['./select-url.component.scss']
})
export class SelectUrlComponent implements OnInit {

  selectValidation: any;
  items: any;
  options: any;
  list = [];
  selected: any;
  controlName: string;
  formControl: AbstractControl;

  get Title() {
    return this.options.title;
  }
  get Required() {
    return this.options.required;
  }
  layoutNode: any;
  constructor(private jsf: JsonSchemaFormService, private renderer: Renderer2, private listsService: ListsService) { }
  FormControl = new FormControl('', [
    Validators.required
  ]);

  ngOnInit() {
    this.options = this.layoutNode.options || {};
    this.items = this.layoutNode.items || [];
    this.jsf.initializeControl(this);
    this.selectValidation = this.options.validationMessages;

    if (this.options.dependent) {
      this.listsService.addObservable(this.options.dependent);
      this.listsService.change.find(x => x.name == this.options.dependent).observable.asObservable().subscribe(id => {
        this.mapList(id);
      })
    }
    else {
      this.mapList();
    }
  }


  private mapList(id = '') {
    this.listsService.getList(`${this.options.url}${id}`).subscribe(x => {
      this.list = x.sort((a, b) => {
        if (a.title > b.title) {
          return 1;
        }
        if (a.title < b.title) {
          return -1;
        }
        return 0;
      });
      this.selected = this.list[0][this.options.key ? this.options.key : 'const'];
      this.change();
    });
  }

  change() {
    if (this.options.isParent) {
      this.listsService.change.find(x => x.name == this.controlName).observable.next(this.selected);
    }
    this.jsf.updateValue(this, this.selected);
  }
}

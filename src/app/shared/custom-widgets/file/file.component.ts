import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { JsonSchemaFormService } from 'angular2-json-schema-form-gabe';
import { AbstractControl } from '@angular/forms';
declare const window;
@Component({
  selector: 'fna-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit {

  controlDisabled = false;
  boundControl = false;
  fileName: string;
  fileContent: string;
  fileIn: any = null;
  options: any = {};
  error: boolean = false;
  filesSupported: string[] = [
    "application/pdf",
    "image/png",
    "image/jpeg"
  ];

  @Input() layoutNode: any;
  @Input() layoutIndex: number[];
  @Input() dataIndex: number[];

  get title() {
    return this.options.title;
  }

  get file() {
    return {
      name: this.fileName,
      content: this.fileContent
    };
  }
  constructor(private jsf: JsonSchemaFormService, private renderer: Renderer2) { }

  ngOnInit() {
    this.options = this.layoutNode.options || {};
    this.jsf.initializeControl(this);
    window.renderer = this.renderer;
  }

  clickFile(e) {
    if (!e.target || !e.target.getElementsByTagName('input').length) {
      return;
    }
    const target = e.target.getElementsByTagName('input')[0];
    target.click();
  }

  change(file) {
    if (!file) {
      return;
    }

    this.checkFileExtension(file);
    this.updateControlValues(file)
      .then(() => {
        this.fileContent = this.fileContent.substring(this.fileContent.indexOf(',') + 1, this.fileContent.length);
        this.jsf.updateValue(this, this.file)
      });
  }

  updateControlValues(file: File): Promise<{}> {
    this.fileName = file.name;
    return this.fileToBase64(file)
      .then(cont => this.fileContent = cont);
  }

  private fileToBase64(file: File): Promise<string> {
    return new Promise((res, rej) => {
      const reader = new FileReader();
      reader.onload = () => {
        res(reader.result);
      };
      reader.onerror = rej;
      reader.readAsDataURL(file);
    });
  }

  checkFileExtension(file) {
    this.error = !!this.filesSupported.find(x => x == file.type);
  }

  deleteFile() {
    this.error = false;
    this.fileName = undefined;
    this.fileIn = null;
    this.jsf.updateValue(this, { name: null, content: null });
  }
}

import { Component, OnInit, Input, Renderer2, AfterViewInit, ElementRef } from '@angular/core';
import { JsonSchemaFormService } from 'angular2-json-schema-form-gabe';


declare const window;

@Component({
  selector: 'fna-file-modal',
  templateUrl: './file-modal.component.html',
  styleUrls: ['./file-modal.component.scss']
})
export class FileModalComponent implements OnInit {

  fileName: string = '';
  fileContent: string;
  options: any = {};
  fileIn: any = null;
  active: boolean = false;
  error: boolean = false;
  filesSupported: string[] = [
    "application/pdf",
    "image/png",
    "image/jpeg"
  ];
  @Input() layoutNode: any;

  get title() {
    return this.options.title;
  }

  get file() {
    return {
      name: this.fileName,
      content: this.fileContent
    };
  }

  constructor(private jsf: JsonSchemaFormService, private renderer: Renderer2, private el: ElementRef) {
  }


  ngOnInit() {
    this.options = this.layoutNode.options || {};
    this.jsf.initializeControl(this);
    if (!this.options.notitle && !this.options.description && this.options.placeholder) {
      this.options.description = this.options.placeholder;
    }
    window.renderer = this.renderer;
  }

  clickFile(e) {
    if (this.el.nativeElement.querySelector('input')) {
      this.el.nativeElement.querySelector('input').click();
    }
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
  private updateControlValues(file: File): Promise<{}> {
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
    this.fileIn = null;
    this.fileName = '';
    this.jsf.updateValue(this, { name: null, content: null });
  }

  closeModal() {
    this.active = false;
  }

  closeModalDelete() {
    this.deleteFile();
    this.closeModal();
  }
}

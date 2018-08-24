import { Component, OnInit, Renderer, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { JsonSchemaFormService } from 'angular2-json-schema-form-gabe';
declare const window;
@Component({
  selector: 'fna-document-review',
  templateUrl: './document-review.component.html',
  styleUrls: ['./document-review.component.scss']
})
export class DocumentReviewComponent implements OnInit {
    urlPdf:SafeUrl;
    items: any;
    options: any;
    layoutNode: any;
    active: boolean = false;
  constructor(private jsf: JsonSchemaFormService, private renderer: Renderer, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.options = this.layoutNode.options || {};
    this.items = this.layoutNode.items || [];
    this.jsf.initializeControl(this);
    if (!this.options.notitle && !this.options.description && this.options.placeholder) {
      this.options.description = this.options.placeholder;
    }
    
    window.renderer = this.renderer;
  }
  
  
  closeModal() {
    this.active = false;
  }
  
  closeModalDelete(){
    this.closeModal();
  }
  
  methodUrlPdf(url) {
    this.urlPdf =  this.sanitizer.bypassSecurityTrustResourceUrl(url);
    this.active = true;
  }

 
  

}

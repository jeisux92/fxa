import { Component, OnInit } from '@angular/core';
import { FormService } from '../../core/services/form.service';
import { BidirectionalService } from '../../core/services/bidirectional.service';
import { IRetake, Retake } from '../../core/interfaces/retake';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from '../../core/services/storage.service';

@Component({
  selector: 'fna-retake',
  templateUrl: './retake.component.html',
  styleUrls: ['./retake.component.scss']
})
export class RetakeComponent implements OnInit {
  showMesssage = false;
  model: IRetake = new Retake();
  documentType = [];
  modelForm: FormGroup;
  tooltip: string;
  constructor(private formService: FormService, private bidirectionalService: BidirectionalService,
    private router: Router, private formBuilder: FormBuilder, private storageService: StorageService) {
    this.modelForm = this.formBuilder.group({
      documentType: ['', Validators.required],
      documentNumber: ['', Validators.required],
      requestCode: ['', Validators.required]
    });

  }
  ngOnInit() {
    this.formService.getFormLocal("Retake").subscribe((x: any) => {
      this.documentType = x.DocumentTypes;
      this.tooltip = x.tooltip
      this.bidirectionalService.form.next(x);
      this.modelForm.patchValue({
        documentType: this.documentType[0].id
      });
    })
  }

  showMe(event) {
    this.showMesssage = !this.showMesssage;
  }

  submit() {
    this.storageService.setExecutionId(this.modelForm.get('requestCode').value);
    this.router.navigate(['/formulario', 'proceso']);
  }

  back() {
    this.router.navigate(['']);
  }



}

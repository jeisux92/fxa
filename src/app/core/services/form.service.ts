import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { BidirectionalService } from './bidirectional.service';
import 'rxjs/add/operator/do';
import { RequestOptions, Headers } from '@angular/http';
import swal from 'sweetalert2'

@Injectable()
export class FormService {
  root = environment.url;
  constructor(private http: HttpClient, private _bidirectionalService: BidirectionalService) { }

  getForm(simpleId: string, payLoad: any) {
    const body = JSON.stringify(payLoad);
    const httpOptions = {
      headers: new HttpHeaders({
        'Simple-Id': simpleId,
        'content-type': "application/json"
      })
    };
    return this.http.post(`${this.root}RunFlow`, body, httpOptions);
  }

  getFormLocal(form: string) {
    const path = 'assets/JSONs/';
    return this.http.get(`${path}Form${form}.json`);
  }

  getExecutionId() {
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': "application/json"
      })
    };
    const data = JSON.stringify({ processid: environment.processId });
    return this.http.post(`${this.root}StartFlow`, data, httpOptions);

  }

}

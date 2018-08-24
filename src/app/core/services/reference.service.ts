import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { RequestOptions, Request, RequestMethod } from '@angular/http';

@Injectable()
export class ReferenceService {
  private root = environment.UrlReference;
  constructor(private _http: HttpClient) { }

  reference(payload) {
    const body = JSON.stringify(payload);
    let headers =  new HttpHeaders({'Content-Type':'application/json', 'Application-Id': 'e471457d-37f0-4ea8-8fe3-20e7e7e7e476', 'Config-Id': '23D638AA-A3C5-4B66-A7A7-BD89254719F7'});
    return this._http.post(this.root, body, {headers : headers});
  }

}

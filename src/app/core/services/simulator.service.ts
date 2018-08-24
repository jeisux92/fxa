import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { RequestOptions, Request, RequestMethod } from '@angular/http';

@Injectable()
export class SimulatorService {
  private root = environment.urlSimulator;
  constructor(private _http: HttpClient) { }

  simulation(payload) {
    const body = JSON.stringify(payload);
    let headers =  new HttpHeaders({'Content-Type':'application/json'});
    return this._http.post(this.root, body, {headers : headers});
  }

}

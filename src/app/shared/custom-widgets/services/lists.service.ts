import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ListsService {

  constructor(private http: HttpClient) { }

  public change = [];


  getList(queryString): Observable<any> {
    return this.http.get(queryString);
  }
  addObservable(name) {
    this.change.push({ name, observable: new Subject<any>() })
  }

}

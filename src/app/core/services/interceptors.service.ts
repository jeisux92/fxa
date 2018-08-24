import { Injectable, ElementRef } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpUserEvent, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import swal from 'sweetalert2'

@Injectable()
export class InterceptorsService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
    let loadingContainer: any = document.querySelector('.loading-container');
    loadingContainer.style.display = 'block';


    return next.handle(req).do((x: any) => {
      if (x.status === 200) {
        loadingContainer.style.display = 'none';
      }
    }).catch((error: HttpErrorResponse) => {
      swal({
        type: 'error',
        title: 'Error',
        text: (typeof error.error)  =="object" ? error.message : JSON.parse(error.error).Content
      })
      loadingContainer.style.display = 'none';
      return Observable.throw(error)
    });
  }


}

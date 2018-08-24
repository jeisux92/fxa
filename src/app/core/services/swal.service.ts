import { Injectable } from '@angular/core';
import swal from 'sweetalert2';

@Injectable()
export class SwalService {

  constructor() { }
  error(message: string): void {
    swal({
      type: 'error',
      title: 'Error',
      text: message
    })
  }
}

import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';

@Injectable()
export class StorageService {

  get ExecutionId(): string {
    return environment.executionId;
  }
  get SimpleId(): string {
    return environment.simpleId;
  }
  constructor() { }


  setSimpleId(simpleId: string) {
    sessionStorage.setItem(this.SimpleId, simpleId);
  }
  getSimpleId(): string {
    return sessionStorage[this.SimpleId];
  }
  setExecutionId(executionId: string) {
    sessionStorage.setItem(this.ExecutionId, executionId);
  }
  getExecutionId(): string {
    return sessionStorage[this.ExecutionId];
  }

  deleteStorage() {
    sessionStorage.removeItem(this.ExecutionId);
    sessionStorage.removeItem(this.SimpleId);

  }
}

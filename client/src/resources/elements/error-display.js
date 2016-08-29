import {inject} from 'aurelia-framework';
import {ErrorService} from '../services/error';

@inject(ErrorService)
export class ErrorDisplay {
  constructor(ErrorService) {
    this.ErrorService = ErrorService;
  }
}


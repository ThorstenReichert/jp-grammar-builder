import {inject} from 'aurelia-framework';
import {JslKatakanaMapperService} from '../services/jsl-katakana-mapper';

@inject(JslKatakanaMapperService)
export class KatakanaValueConverter {
  constructor(JslKatakanaMapperService) {
    this.map = JslKatakanaMapperService.map;
  }

  toView(value) {
    if (typeof value === 'string') {
       return this.map(value);
    }
    else if (Array.isArray(value)) {
      return value
        .map(this.map)
        .join('');
    }
  }

  fromView(value) {

  }
}


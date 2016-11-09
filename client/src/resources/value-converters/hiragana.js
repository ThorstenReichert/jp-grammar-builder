import {inject} from 'aurelia-framework';
import {JslHiraganaMapperService} from '../services/jsl-hiragana-mapper';

@inject(JslHiraganaMapperService)
export class HiraganaValueConverter {
  constructor(JslHiraganaMapperService) {
    this.map = JslHiraganaMapperService.map;
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


import {bindable, inject} from 'aurelia-framework';
import {containerless} from 'aurelia-templating';
import {KanaService} from './../services/kana';

@containerless
@inject(KanaService)
export class Kana {
  @bindable word = '';

  constructor(KanaService) {
    this.KanaService = KanaService;
    this.style = 'word-spacing: 5px; margin: 0; padding: 0;';
  }
}


import {bindable, inject} from 'aurelia-framework';
import {ObserverLocator} from 'aurelia-binding';
import {KanaService} from '../services/kana';

@inject(ObserverLocator, KanaService)
export class KanaInput {
  constructor(ObserverLocator, KanaService) {
    this.word = '';
    this.type = '';
    this.KanaService = KanaService;

    // enables use of "this" in onKanaChange
    this.onKanaChange = this.onKanaChange.bind(this);
    this.kanaObserver = ObserverLocator
      .getObserver(this, 'word')
      .subscribe(this.onKanaChange);
  }

  onKanaChange(newValue, oldValue) {
    this.KanaService.word = this.word;
  }
}


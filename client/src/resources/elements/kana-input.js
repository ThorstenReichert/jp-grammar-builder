import {bindable, inject} from 'aurelia-framework';
import {ObserverLocator} from 'aurelia-binding';
import {KanaService} from '../services/kana';
import {GrammarService} from '../services/grammar';

@inject(ObserverLocator, KanaService, GrammarService)
export class KanaInput {
  constructor(ObserverLocator, KanaService, GrammarService) {
    this.word = '';
    this.type = '';
    this.KanaService = KanaService;
    this.GrammarService = GrammarService;

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


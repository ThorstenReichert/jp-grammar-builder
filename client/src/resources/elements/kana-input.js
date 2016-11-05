import {bindable, inject} from 'aurelia-framework';
import {observable} from 'aurelia-binding';
import {KanaService} from '../services/kana';
import {GrammarService} from '../services/grammar';
import {rules} from '../constants/rules';
import {types} from '../constants/types';

@inject(KanaService, GrammarService)
export class KanaInput {
  constructor(KanaService, GrammarService) {
    this.KanaService = KanaService;
    this.GrammarService = GrammarService;
    this.rules = rules;
    this.types = types;
  }

  @observable({changeHandler: 'onWordChange'}) word = '';
  onWordChange(newValue, oldValue) {
    this.KanaService.word = this.word;
  }


  @observable({changeHandler: 'onTypeChange'}) type = '';
  onTypeChange(newValue, oldValue) {
    this.KanaService.type = newValue;
  }
}


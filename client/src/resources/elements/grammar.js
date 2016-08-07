import {containerless} from 'aurelia-templating'
import {inject} from 'aurelia-framework';
import {GrammarService} from './../services/grammar';

@containerless
@inject(GrammarService)
export class Grammar {
  constructor(GrammarService) {
    this.GrammarService = GrammarService;
  }
}
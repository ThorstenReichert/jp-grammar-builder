import {bindable} from 'aurelia-framework';

export class KanaInput {
  @bindable value;

  constructor() {
    this.word = '';
    this.type = '';
  }

  valueChanged(newValue, oldValue) {

  }
}


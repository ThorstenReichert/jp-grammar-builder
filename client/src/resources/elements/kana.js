import {bindable} from 'aurelia-framework';
import {containerless} from 'aurelia-templating';

@containerless
export class Kana {
  @bindable word = '';
}


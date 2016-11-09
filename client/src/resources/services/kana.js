import {inject, noView, computedFrom, LogManager} from 'aurelia-framework';
import {KanaParserService} from './kana-parser';

const log = LogManager.getLogger('KanaService');

@noView
@inject(KanaParserService)
export class KanaService {
    constructor(KanaParserService) {
        this.parse = KanaParserService.parse;

        this._word = [];
        this._type = '';
        this._alphabet = 'hiragana';
    }

    set word(value) {
        if (typeof value !== 'string') {
            throw Error('KanaService: "kana" must be string');
        }

        this._word = this.parse(value);
    }

    @computedFrom('_word')
    get word() {
        return this._word;
    }

    set alphabet(value) {
        if (value === 'katakana') {
            log.debug('set alphabet to katakana');
            this._alphabet = 'katakana';
        }
        else {
            log.debug('set alphabet to hiragana');
            this._alphabet = 'hiragana';
        }
    }

    @computedFrom('_alphabet')
    get alphabet() {
        return this._alphabet;
    }

    set type(value) {
        if (typeof value === 'string') {
            this._type = value;
            log.debug('set type', this._type);
        }
    }

    @computedFrom('_type')
    get type() {
        return this._type;
    }
}


import {noView, computedFrom} from 'aurelia-framework';

const chars = [
    'a', 'i', 'u', 'e', 'o',
    'ka', 'ki', 'ku', 'ke', 'ko',
    'kya', 'kyu', 'kyo',
    'ga', 'gi', 'gu', 'ge', 'go',
    'gya', 'gyu', 'gyo',
    'sa', 'si', 'su', 'se', 'so',
    'sya', 'syu', 'syo',
    'za', 'zi', 'zu', 'ze', 'zo',
    'zya', 'zyu', 'zyo',
    'ta', 'ti', 'tu', 'te', 'to',
    'tya', 'tyu', 'tyo',
    'da', 'de', 'do',
    'na', 'ni', 'nu', 'ne', 'no',
    'nya', 'nyu', 'nyo',
    'ha', 'hi', 'hu', 'he', 'ho',
    'hya', 'hyu', 'hyo',
    'pa', 'pi', 'pu', 'pe', 'po',
    'pya', 'pyu', 'pyo',
    'ba', 'bi', 'bu', 'be', 'bo',
    'bya', 'byu', 'byo',
    'ma', 'mi', 'mu', 'me', 'mo',
    'mya', 'myu', 'myo',
    'ya', 'yu', 'yo',
    'ra', 'ri', 'ru', 're', 'ro',
    'rya', 'ryu', 'ryo',
    'wa', 'wo',
    'n',
    'k', 's', 't', 'p'
];

function parse(string) {
    let res = [];

    while (string.length > 0) {
        let token = string.substring(0,3);
        if (chars.indexOf(token) !== -1) {
            res.push(token);
            string = string.substring(3);
            continue;
        }

        token = string.substring(0,2);
        if (chars.indexOf(token) !== -1) {
            res.push(token);
            string = string.substring(2);
            continue;
        }

        token = string.substring(0,1);
        if (chars.indexOf(token) !== -1) {
            res.push(token);
            string = string.substring(1);
            continue;
        }

        res.push(token);
        string = string.substring(1);
    }

    return res;
}

@noView
export class KanaService {
    constructor() {
        this._word = [];
        this._type = '';
        this._alphabet = 'hiragana';
    }

    set word(value) {
        if (typeof value !== 'string') {
            throw Error('KanaService: "kana" must be string');
        }

        this._word = parse(value);
    }

    @computedFrom('_word')
    get word() {
        return this._word;
    }

    set alphabet(value) {
        if (value === 'katakana') {
            this._alphabet = 'katakana';
        }
        else {
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
        }
    }

    @computedFrom('_type')
    get type() {
        return this._type;
    }
}


import {noView, computedFrom, LogManager} from 'aurelia-framework';

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

const doubleConsonants = ['kk', 'ss', 'tt', 'pp'];

@noView
export class KanaParserService {

    //
    // methods
    //

    /**
     * Decomposes string into Hiragana-symbols
     *
     * @param {string} string
     * @returns {string[]}
     */
    parse(string) {
        let res = [];

        // this parser leverages the fact that no shorter symbols
        // occur as substrings of longer symbols

        while (string.length > 0) {
            // recognize 3-char symbols
            let token = string.substring(0,3);
            if (chars.indexOf(token) !== -1) {
                res.push(token);
                string = string.substring(3);
                continue;
            }

            // recognize regular 2-char symbols
            token = string.substring(0,2);
            if (chars.indexOf(token) !== -1) {
                res.push(token);
                string = string.substring(2);
                continue;
            }

            // recognize double consonants
            if (doubleConsonants.indexOf(token) !== -1) {
                res.push(token.charAt(0) + token.charAt(0));
                string = string.substring(1);
                continue;
            }

            // recognize 1-char symbols
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
}
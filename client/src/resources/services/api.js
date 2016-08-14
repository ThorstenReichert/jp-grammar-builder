import {noView} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@noView
export class ApiService {
    constructor() {
        this.http = new HttpClient();
    }


    /**
     * Query conjugations from backend
     *
     * @param {string[]} kana - array of chars
     * @param {string} type - grammatical type of kana
     * @param {string[]} grammar - array of consecutive rules to apply to kana
     * @returns {Object} promise that resolves to array of rule / result pairs
     */
    grammarQuery(kana, type, grammar) {
        let query = {
            kana: kana,
            type: type,
            grammar: grammar
        };

        return this.http.post('/api/kana', query)
            .then(data => {
                return new Promise(function (resolve, reject) {
                    resolve(JSON.parse(data.response));
                });
            });
    }
}


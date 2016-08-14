import {noView} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@noView
export class ApiService {
    constructor() {
        this.http = new HttpClient();
    }

    grammarQuery(kana, type, grammar) {
        let query = {
            kana: kana,
            type: type,
            grammar: grammar
        };

        console.log('querying with');
        console.log(query);

        this.http.post('/api/kana', query)
            .then(response => console.log(response));
    }
}


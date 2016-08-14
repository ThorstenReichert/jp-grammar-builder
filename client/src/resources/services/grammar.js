import {noView, computedFrom, inject} from 'aurelia-framework';
import {ObserverLocator, BindingEngine, observable} from 'aurelia-binding';
import {ApiService} from './api';
import {KanaService} from './kana';

function range(length) {
    let res = [];
    for (let i = 0; i < length; i++) {
        res.push(i);
    }
    return res;
}

class GrammarItem {
    constructor(notify) {
        this.notify = notify;
    }

    @observable({changeHandler: 'idChanged'}) id = '';
    idChanged(newValue, oldValue) {
        if (typeof this.notify === 'function') {
            this.notify();
        }
    }

    empty() {
        return this.id === '' || !this.id;
    }
}

@noView
@inject(ApiService, KanaService)
export class GrammarService {
    constructor(ApiService, KanaService) {
        this.ApiService = ApiService;
        this.KanaService = KanaService;
        this.stack = [new GrammarItem(this.clean.bind(this))];
    }

    get indexSet() {
        return range(length);
    }

    clean() {
        let newStack = [];

        let i = 0;
        for (; i < this.stack.length; i++) {
            if (this.stack[i].empty()) {
                break;
            }
            newStack.push(this.stack[i]);
        }
        newStack.push(new GrammarItem(this.clean.bind(this)));
        this.stack = newStack;
    }

    query() {
        let grammar = [];
        for (let i = 0; i < this.stack.length; i++) {
            grammar.push(this.stack[i].id);
        }

        this.ApiService.grammarQuery(
            this.KanaService.word,
            this.KanaService.type,
            grammar
        );
    }
}


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
        this._result = null;
        this._error = null;
    }

    @observable({changeHandler: 'idChanged'}) id = '';
    idChanged(newValue, oldValue) {
        this._result = null;
        this._error = null;

        if (typeof this.notify === 'function') {
            this.notify();
        }
    }

    set result(value) {
        this._result = value;
        this._error = null;
    }

    @computedFrom('_result')
    get result() {
        return this._result;
    }

    set error(value) {
        this._error = value;
        this._result = null;
    }

    @computedFrom('_error')
    get error() {
        return this._error;
    }

    @computedFrom('_result')
    get hasResult() {
        return this._result && this._result !== '';
    }

    @computedFrom('_error')
    get hasError() {
        let res = !!this._error;
        return res;
    }

    empty() {
        return this.id === '' || !this.id;
    }

    reset() {
        this._result = null;
        this._error = null;
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
        let reset = false;

        let i = 0;
        for (; i < this.stack.length; i++) {
            if (this.stack[i].empty()) {
                break;
            }
            if (!this.stack[i].hasResult) {
                reset = true;
            }
            if (reset) {
                this.stack[i].reset();
            }
            newStack.push(this.stack[i]);
        }
        newStack.push(new GrammarItem(this.clean.bind(this)));
        this.stack = newStack;
    }

    query() {
        let _this = this;
        let grammar = [];
        for (let i = 0; i < this.stack.length; i++) {
            grammar.push(this.stack[i].id);
        }

        this.ApiService.grammarQuery(
            this.KanaService.word,
            this.KanaService.type,
            grammar
        ).then(response => {
            let i = 0;

            response.forEach(function (conjugation, index) {
                if (index === 0) {
                    return;
                }
                while (_this.stack[i].id !== conjugation.rule && i < _this.stack.length) {
                    i++;
                }
                if (conjugation.kana) {
                    _this.stack[i].result = conjugation.kana;
                } else if (conjugation.error) {
                    _this.stack[i].error = conjugation.error;
                }
                i++;
            });
        },
        error => {});
    }
}


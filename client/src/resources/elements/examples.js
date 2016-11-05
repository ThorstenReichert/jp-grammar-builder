import {inject, LogManager} from 'aurelia-framework';
import {KanaService} from '../services/kana';
import {GrammarService, GrammarItem} from '../services/grammar';
import {rules} from '../constants/rules';
import {types} from '../constants/types';

const log = LogManager.getLogger('Examples');

class ExampleConfig {
  constructor(phrase, type, grammar, result, description) {
    this.phrase = phrase;
    this.type = type;
    this.grammar = grammar;
    this.result = result || '';
    this.description = description || '';
  }
}

class Example {
  constructor(KanaService, GrammarService, config) {
    this.config = config;
    this.load = function () {
      log.debug('loading', config)

      KanaService.word = config.phrase;
      KanaService.type = config.type;

      GrammarService.reset();
      config.grammar.forEach(function (rule) {
        GrammarService.push(rule);
      });
    }
  }
}

@inject(KanaService, GrammarService)
export class Examples {
  constructor(KanaService, GrammarService) {
    const exampleConfigs = [
      new ExampleConfig(
        'taberu',
        types.ichidan,
        [rules.desire, rules.naru],
        ['食','be','ta','i'],
        'want to eat'
      ),
      new ExampleConfig(
        'taberu',
        types.ichidan,
        [rules.desire, rules.naru, rules.perfective],
        ['食','be','ta','ku','na','t','ta'],
        'became wanting to eat (got hungry)'
      ),
      new ExampleConfig(
        'taberu',
        types.ichidan,
        [rules.desire, rules.negative, rules.naru, rules.perfective],
        ['食','be','ta','ku','na','ku','na','t','ta'],
        ' "became not wanting to eat" (lost my appetite)'
      )
    ];

    const examples = [];
    exampleConfigs.forEach(function (config) {
      examples.push(new Example(KanaService, GrammarService, config));
    });

    this.examples = examples;
  }
}

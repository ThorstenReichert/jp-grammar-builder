define('app',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function App() {
    _classCallCheck(this, App);

    this.message = 'Hello World!';
  };
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('resources/elements/kana-input',['exports', 'aurelia-framework', 'aurelia-binding', '../services/kana'], function (exports, _aureliaFramework, _aureliaBinding, _kana) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.KanaInput = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var KanaInput = exports.KanaInput = (_dec = (0, _aureliaFramework.inject)(_aureliaBinding.ObserverLocator, _kana.KanaService), _dec(_class = function () {
    function KanaInput(ObserverLocator, KanaService) {
      _classCallCheck(this, KanaInput);

      this.word = '';
      this.type = '';
      this.KanaService = KanaService;

      this.onKanaChange = this.onKanaChange.bind(this);
      this.kanaObserver = ObserverLocator.getObserver(this, 'word').subscribe(this.onKanaChange);
    }

    KanaInput.prototype.onKanaChange = function onKanaChange(newValue, oldValue) {
      this.KanaService.word = this.word;
    };

    return KanaInput;
  }()) || _class);
});
define('resources/value-converters/hiragana',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var map = {};
  map.a = '&#x3042';
  map.i = '&#12356;';
  map.u = '&#12358;';
  map.e = '&#12360;';
  map.o = '&#12362;';
  map.ka = '&#12363;';
  map.ga = '&#12364;';
  map.ki = '&#12365;';
  map.gi = '&#12366;';
  map.ku = '&#12367;';
  map.gu = '&#12368;';
  map.ke = '&#12369;';
  map.ge = '&#12370;';
  map.ko = '&#12371;';
  map.go = '&#12372;';
  map.sa = '&#12373;';
  map.za = '&#12374;';
  map.si = '&#12375;';
  map.zi = '&#12376;';
  map.su = '&#12377;';
  map.zu = '&#12378;';
  map.se = '&#12379;';
  map.ze = '&#12380;';
  map.so = '&#12381;';
  map.zo = '&#12382;';
  map.ta = '&#12383;';
  map.da = '&#12384;';
  map.ti = '&#12385;';
  map.di = '&#12386;';
  map.tu = '&#12388;';
  map.du = '&#12389;';
  map.te = '&#12390;';
  map.de = '&#12391;';
  map.to = '&#12392;';
  map.do = '&#12393;';
  map.na = '&#12394;';
  map.ni = '&#12395;';
  map.nu = '&#12396;';
  map.ne = '&#12397;';
  map.no = '&#12398;';
  map.ha = '&#12399;';
  map.ba = '&#12400;';
  map.pa = '&#12401;';
  map.hi = '&#12402;';
  map.bi = '&#12403;';
  map.pi = '&#12404;';
  map.hu = '&#12405;';
  map.bu = '&#12406;';
  map.pu = '&#12407;';
  map.he = '&#12408;';
  map.be = '&#12409;';
  map.pe = '&#12410;';
  map.ho = '&#12411;';
  map.bo = '&#12412;';
  map.po = '&#12413;';
  map.ma = '&#12414;';
  map.mi = '&#12415;';
  map.mu = '&#12416;';
  map.me = '&#12417;';
  map.mo = '&#12418;';
  map.ya = '&#12420;';
  map.yu = '&#12422;';
  map.yo = '&#12424;';
  map.ra = '&#12425;';
  map.ri = '&#12426;';
  map.ru = '&#12427;';
  map.re = '&#12428;';
  map.ro = '&#12429;';
  map.wa = '&#12431;';
  map.wo = '&#12434;';
  map.n = '&#12435;';

  map.kya = '&#12365;&#12419;';
  map.kyu = '&#12365;&#12421;';
  map.kyo = '&#12365;&#12423;';
  map.gya = '&#12366;&#12419;';
  map.gyu = '&#12366;&#12421;';
  map.gyo = '&#12366;&#12423;';
  map.sya = '&#12375;&#12419;';
  map.syu = '&#12375;&#12421;';
  map.syo = '&#12375;&#12423;';
  map.zya = '&#12376;&#12419;';
  map.zyu = '&#12376;&#12421;';
  map.zyo = '&#12376;&#12423;';
  map.tya = '&#12385;&#12419;';
  map.tyu = '&#12385;&#12421;';
  map.tyo = '&#12385;&#12423;';
  map.nya = '&#12395;&#12419;';
  map.nyu = '&#12395;&#12421;';
  map.nyo = '&#12395;&#12423;';
  map.hya = '&#12402;&#12419;';
  map.hyu = '&#12402;&#12421;';
  map.hyo = '&#12402;&#12423;';
  map.bya = '&#12403;&#12419;';
  map.byu = '&#12403;&#12421;';
  map.byo = '&#12403;&#12423;';
  map.pya = '&#12404;&#12419;';
  map.pyu = '&#12404;&#12421;';
  map.pyo = '&#12404;&#12423;';
  map.mya = '&#12415;&#12419;';
  map.myu = '&#12415;&#12421;';
  map.myo = '&#12415;&#12423;';
  map.rya = '&#12426;&#12419;';
  map.ryu = '&#12426;&#12421;';
  map.ryo = '&#12426;&#12423;';

  map.k = '&#12387;';
  map.s = '&#12387;';
  map.t = '&#12387;';
  map.p = '&#12387;';

  function convert(char) {
    return map[char] || char;
  }

  var HiraganaValueConverter = exports.HiraganaValueConverter = function () {
    function HiraganaValueConverter() {
      _classCallCheck(this, HiraganaValueConverter);
    }

    HiraganaValueConverter.prototype.toView = function toView(value) {
      if (typeof value === 'string') {
        return convert(value);
      } else if (Array.isArray(value)) {
        return value.map(convert).join('');
      }
    };

    HiraganaValueConverter.prototype.fromView = function fromView(value) {};

    return HiraganaValueConverter;
  }();
});
define('resources/elements/kanaservice',['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.KanaService = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _desc, _value, _class, _descriptor;

  var KanaService = exports.KanaService = (_class = function () {
    function KanaService() {
      _classCallCheck(this, KanaService);

      _initDefineProp(this, 'value', _descriptor, this);
    }

    KanaService.prototype.valueChanged = function valueChanged(newValue, oldValue) {};

    return KanaService;
  }(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'value', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  })), _class);
});
define('resources/services/kana',['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.KanaService = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        Object['ke' + 'ys'](descriptor).forEach(function (key) {
            desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;

        if ('value' in desc || desc.initializer) {
            desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function (desc, decorator) {
            return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0) {
            desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
            desc.initializer = undefined;
        }

        if (desc.initializer === void 0) {
            Object['define' + 'Property'](target, property, desc);
            desc = null;
        }

        return desc;
    }

    var _dec, _class, _desc, _value, _class2;

    var chars = ['a', 'i', 'u', 'e', 'o', 'ka', 'ki', 'ku', 'ke', 'ko', 'kya', 'kyu', 'kyo', 'ga', 'gi', 'gu', 'ge', 'go', 'gya', 'gyu', 'gyo', 'sa', 'si', 'su', 'se', 'so', 'sya', 'syu', 'syo', 'za', 'zi', 'zu', 'ze', 'zo', 'zya', 'zyu', 'zyo', 'ta', 'ti', 'tu', 'te', 'to', 'tya', 'tyu', 'tyo', 'da', 'de', 'do', 'na', 'ni', 'nu', 'ne', 'no', 'nya', 'nyu', 'nyo', 'ha', 'hi', 'hu', 'he', 'ho', 'hya', 'hyu', 'hyo', 'pa', 'pi', 'pu', 'pe', 'po', 'pya', 'pyu', 'pyo', 'ba', 'bi', 'bu', 'be', 'bo', 'bya', 'byu', 'byo', 'ma', 'mi', 'mu', 'me', 'mo', 'mya', 'myu', 'myo', 'ya', 'yu', 'yo', 'ra', 'ri', 'ru', 're', 'ro', 'rya', 'ryu', 'ryo', 'wa', 'wo', 'n', 'k', 's', 't', 'p'];

    function parse(string) {
        var res = [];

        while (string.length > 0) {
            var token = string.substring(0, 3);
            if (chars.indexOf(token) !== -1) {
                res.push(token);
                string = string.substring(3);
                continue;
            }

            token = string.substring(0, 2);
            if (chars.indexOf(token) !== -1) {
                res.push(token);
                string = string.substring(2);
                continue;
            }

            token = string.substring(0, 1);
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

    var KanaService = exports.KanaService = (_dec = (0, _aureliaFramework.computedFrom)('_word'), (0, _aureliaFramework.noView)(_class = (_class2 = function () {
        function KanaService() {
            _classCallCheck(this, KanaService);

            this._word = [];
        }

        _createClass(KanaService, [{
            key: 'word',
            set: function set(value) {
                if (typeof value !== 'string') {
                    throw Error('KanaService: "kana" must be string');
                }

                this._word = parse(value);
            },
            get: function get() {
                return this._word;
            }
        }]);

        return KanaService;
    }(), (_applyDecoratedDescriptor(_class2.prototype, 'word', [_dec], Object.getOwnPropertyDescriptor(_class2.prototype, 'word'), _class2.prototype)), _class2)) || _class);
});
define('resources/elements/kana',['exports', 'aurelia-framework', 'aurelia-templating'], function (exports, _aureliaFramework, _aureliaTemplating) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Kana = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _class, _desc, _value, _class2, _descriptor;

  var Kana = exports.Kana = (0, _aureliaTemplating.containerless)(_class = (_class2 = function Kana() {
    _classCallCheck(this, Kana);

    _initDefineProp(this, 'word', _descriptor, this);
  }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'word', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return '';
    }
  })), _class2)) || _class;
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\r\n  <require from=\"bootstrap/css/bootstrap.css\"></require>\r\n  <require from=\"./resources/elements/kana-input\"></require>\r\n\r\n  <div class=\"header\">\r\n    <div class=\"message\">JP Grammar Builder</div>\r\n  </div>\r\n\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <kana-input></kana-input>\r\n    </div>\r\n  </div>\r\n</template>\r\n"; });
define('text!resources/elements/kana-input.html', ['module'], function(module) { module.exports = "<template>\r\n  <require from=\"./../value-converters/hiragana\"></require>\r\n  <require from=\"./kana\"></require>\r\n\r\n  <form class=\"form-horizontal\" role=\"form\">\r\n    <div class=\"form-group\">\r\n      <div class=\"col-sm-offset-2 col-sm-8\">\r\n        <h3><kana word.bind=\"KanaService.word\"></kana></h3>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label class=\"control-label col-sm-2\" for=\"kana-word\">Word</label>\r\n      <div class=\"col-sm-8\">\r\n        <input type=\"test\" class=\"form-control\" id=\"kana-word\" autocomplete=\"off\" value.bind=\"word\">\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label class=\"control-label col-sm-2\" for=\"kana-type\">Type</label>\r\n      <div class=\"col-sm-2\">\r\n        <select class=\"form-control\" id=\"kana-type\" value.bind=\"type\">\r\n          <option></option>\r\n          <option>Ichidan</option>\r\n          <option>Godan</option>\r\n          <option>Adjectival</option>\r\n          <option>Nominal</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"col-sm-2 col-sm-offset-5\">\r\n        <button type=\"submit\">Submit</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</template>"; });
define('text!../styles/loading-page.css', ['module'], function(module) { module.exports = "@keyframes loaded {\r\n  from { margin: 10% 0 0 0; }\r\n  to { margin: 3% 0 7% 0; }\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n}\r\n\r\n.splash, .header {\r\n  text-align: center;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.splash {\r\n  margin: 10% 0 0 0;\r\n}\r\n\r\n.header {\r\n  margin: 3% 0 7% 0;\r\n}\r\n\r\n.splash .message, .header .message {\r\n  font-size: 72px;\r\n  line-height: 72px;\r\n  text-shadow: rgba(0, 0, 0, 0.5) 0 0 15px;\r\n  text-transform: uppercase;\r\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n}\r\n\r\n.header {\r\n  animation-name: loaded;\r\n  animation-duration: 1s;\r\n}\r\n\r\n.splash .fa-spinner {\r\n  text-align: center;\r\n  display: inline-block;\r\n  font-size: 72px;\r\n  margin-top: 50px;\r\n}"; });
define('text!resources/elements/kanaservice.html', ['module'], function(module) { module.exports = "<template>\n  <h1>${value}</h1>\n</template>"; });
define('text!resources/elements/kana.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./../value-converters/hiragana\"></require>\n  <span style=\"word-spacing: 5px; margin: 0; padding: 0;\" class=\"class\" innerhtml=\"${word | hiragana}\"></span>\n</template>"; });
//# sourceMappingURL=app-bundle.js.map
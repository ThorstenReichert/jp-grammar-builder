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
define('resources/elements/kana-input',['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.KanaInput = undefined;

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

  var KanaInput = exports.KanaInput = (_class = function () {
    function KanaInput() {
      _classCallCheck(this, KanaInput);

      _initDefineProp(this, 'value', _descriptor, this);

      this.word = '';
      this.type = '';
    }

    KanaInput.prototype.valueChanged = function valueChanged(newValue, oldValue) {};

    return KanaInput;
  }(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'value', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  })), _class);
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"bootstrap/css/bootstrap.css\"></require>\n  <require from=\"./resources/elements/kana-input\"></require>\n\n  <div class=\"header\">\n    <div class=\"message\">JP Grammar Builder</div>\n  </div>\n\n  <div class=\"container\">\n    <div class=\"row\">\n      <kana-input></kana-input>\n    </div>\n  </div>\n</template>\n"; });
define('text!../styles/loading-page.css', ['module'], function(module) { module.exports = "@keyframes loaded {\r\n  from { margin: 10% 0 0 0; }\r\n  to { margin: 3% 0 7% 0; }\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n}\r\n\r\n.splash, .header {\r\n  text-align: center;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.splash {\r\n  margin: 10% 0 0 0;\r\n}\r\n\r\n.header {\r\n  margin: 3% 0 7% 0;\r\n}\r\n\r\n.splash .message, .header .message {\r\n  font-size: 72px;\r\n  line-height: 72px;\r\n  text-shadow: rgba(0, 0, 0, 0.5) 0 0 15px;\r\n  text-transform: uppercase;\r\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n}\r\n\r\n.header {\r\n  animation-name: loaded;\r\n  animation-duration: 1s;\r\n}\r\n\r\n.splash .fa-spinner {\r\n  text-align: center;\r\n  display: inline-block;\r\n  font-size: 72px;\r\n  margin-top: 50px;\r\n}"; });
define('text!resources/elements/kana-input.html', ['module'], function(module) { module.exports = "<template>\n  <form class=\"form-horizontal\" role=\"form\">\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\" for=\"kana-word\">Word</label>\n      <div class=\"col-sm-10\">\n        <input type=\"test\" class=\"form-control\" id=\"kana-word\" value.bind=\"word\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\" for=\"kana-type\">Type</label>\n      <div class=\"col-sm-2\">\n        <select class=\"form-control\" id=\"kana-type\" value.bind=\"type\">\n          <option></option>\n          <option>Ichidan</option>\n          <option>Godan</option>\n          <option>Adjectival</option>\n          <option>Nominal</option>\n        </select>\n      </div>\n    </div>\n  </form>\n  <div>\n    <p>Word: ${word}</p>\n    <p>Type: ${type}</p>\n  </div>\n</template>"; });
//# sourceMappingURL=app-bundle.js.map
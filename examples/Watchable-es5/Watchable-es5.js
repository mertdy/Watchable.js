/**
 * Developer
 * Mert Donmezyurek
 * mertdy.com
 *
 * GitHub:
 * https://github.com/mertosmandy/Watchable.js
 *
 * LICENSE: MIT
 */

'use strict';
var exportWatchable = {};
Object.defineProperty(exportWatchable, '__esModule', { value: true });
var Watchable = /** @class */ (function() {
  function Watchable(val, watcher) {
    this.callbackArr = {
      current: 0,
      arr: []
    };
    if (val) {
      this['value'] = val;
    }
    if (watcher) {
      this['watch'](watcher);
    }
  }
  Object.defineProperty(Watchable.prototype, 'value', {
    get: function() {
      return this.val;
    },
    set: function(newVal) {
      var oldValue = this.val;
      this.val = newVal;
      for (var _i = 0, _a = this.callbackArr.arr; _i < _a.length; _i++) {
        var map = _a[_i];
        map.func(newVal, oldValue);
      }
    },
    enumerable: true,
    configurable: true
  });
  Watchable.prototype.watch = function(callback) {
    var map = {
      key: this.callbackArr.current,
      func: callback
    };
    this.callbackArr.arr.push(map);
    this.callbackArr.current++;
    return map.key;
  };
  Watchable.prototype.unwatchAll = function() {
    this.callbackArr.arr.length = 0;
    this.callbackArr.current = 0;
  };
  Watchable.prototype.unwatch = function(watchId) {
    for (var _i = 0, _a = this.callbackArr.arr; _i < _a.length; _i++) {
      var map = _a[_i];
      if (map.key === watchId) {
        map.func = function() {};
        return true;
      }
    }
    return false;
  };
  return Watchable;
})();

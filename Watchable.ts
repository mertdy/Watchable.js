export class Watchable {
  private callbackArr = {
    current: 0,
    arr: []
  };

  private val: any;

  constructor(val?: any, watcher?: Function) {
    if (val) {
      this['value'] = val;
    }
    if (watcher) {
      this['watch'](watcher);
    }
  }

  get value() {
    return this.val;
  }

  set value(newVal) {
    let oldValue = this.val;
    this.val = newVal;
    for (const map of this.callbackArr.arr) {
      map.func(newVal, oldValue);
    }
  }

  watch(callback: Function): Number {
    let map = {
      key: this.callbackArr.current,
      func: callback
    };
    this.callbackArr.arr.push(map);
    this.callbackArr.current++;
    return map.key;
  }

  unwatchAll(): void {
    this.callbackArr.arr.length = 0;
    this.callbackArr.current = 0;
  }

  unwatch(watchId: Number): Boolean {
    for (const map of this.callbackArr.arr) {
      if (map.key === watchId) {
        map.func = () => {};
        return true;
      }
    }
    return false;
  }
}

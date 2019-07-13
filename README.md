# Watchable.js

Very lightweight library designed with Observer Pattern principle. It can take your variable and starts to watch it. If the value of your variable is changed, all the callback functions you subscribed will be triggered. Using this library, you can watch the value changes with one or more callback functions, unwatch the callbacks one by one or unwatch all the callbacks at once.

The callback functions will take the new value and the old value of the variable as the parameters.

# Importing

#### Import as ES5 module

```html
<head>
  <script src="Watchable-es5.js"></script>
  <script src="index.js"></script>
</head>
```

```javascript
var val = 'heiii';
var izle = new Watchable(val);

// watchid is needed when you want to unwatch this specific function
var watchid1 = izle.watch(function(newVal, oldVal) {
  console.log('oldVal: ' + oldVal);
});
var watchid2 = izle.watch(function(newVal, oldVal) {
  console.log('newVal: ' + newVal);
});

izle.value = 'whatsupp?'; // both callbacks are triggered here

setTimeout(() => {
  izle.value = 'mert'; // both callbacks are triggered here
  izle.unwatch(watchid1); //this will unwatch the first callback function

  setTimeout(() => {
    izle.value = 'dy'; // only one callback is triggered here
    // old value will not be printed here since we unwatched it.
  }, 2000);
}, 2000);
```

#### Import as ES6 module

```html
<head>
  <script type="module" src="index.js"></script>
  <!-- Your own js file needs to be imported as module in HTML file -->
</head>
```

```javascript
import { Watchable } from './Watchable-es6.js';

let val = 'heiii';
let izle = new Watchable(val);

// watchid is needed when you want to unwatch this specific function
let watchid1 = izle.watch((newVal, oldVal) => {
  console.log(`oldVal: ${oldVal}`);
});
let watchid2 = izle.watch((newVal, oldVal) => {
  console.log(`newVal: ${newVal}`);
});

izle.value = 'whatsupp?'; // both callbacks are triggered here

setTimeout(() => {
  izle.value = 'mert'; // both callbacks are triggered here
  izle.unwatch(watchid1); //this will unwatch the first callback function

  setTimeout(() => {
    izle.value = 'dy'; // only one callback is triggered here
    // old value will not be printed here since we unwatched it.
  }, 2000);
}, 2000);
```

#### Import as TypeScript

The same as the ES6 import

#### Supported functions

```javascript
// Getting
let w = new Watchable(yourValue);
console.log(w.value);

// Setting
let w = new Watchable();
w.value = newValue;

// watching
let w = new Watchable(yourValue);
let watchId = w.watch((newValue, oldValue) => console.log());

// unwatching
w.unwatch(watchId);

// unwatching all
w.unwatchAll();
```

#### Final Note

This library cannot trace the changes "in" arrays or the changes "in" objects. You need to declare a new value to trigger the watchers.

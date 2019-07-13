let izle = new Watchable('bos');
console.log(izle.value);
let watchid = izle.watch((newVal, oldVal) =>
  console.log(`newVal: ${newVal}, oldVal: ${oldVal}`)
);
setTimeout(() => {
  izle.value = 'mert';
  // izle.unwatch(watchid);
  setTimeout(() => {
    izle.value = 'osman';
  }, 2000);
}, 2000);

# Readometer
The correct reading progress measurer.

![NPM](https://img.shields.io/npm/l/readometer)
[![npm version](https://badge.fury.io/js/readometer.svg)](https://badge.fury.io/js/readometer)
![npm bundle size](https://img.shields.io/bundlephobia/min/readometer)
![npm](https://img.shields.io/npm/dy/readometer)

Uses a combination of **time spent on the dom element** and **scroll points** to track the reading progress of the user. Spent time, effects the reading progress based on average reading speed and language of the text.

## Install
```sh
npm i readometer
```

## Import
There are different types of distributions depending on your use case. Essentially, the package can be imported via require:

```js
const kit = require('readometer')
```

or via script tag:

```html
<script type="text/javascript" src="https://unpkg.com/basekits@1/dist/basekits.iife.js"></script>
<script type="text/javascript" src="https://unpkg.com/event-emitter-object@1/dist/event-emitter-object.iife.js"></script>
<script type="text/javascript" src="https://unpkg.com/visibility-state-listener@1/dist/visibility-state-listener.iife.js"></script>

<script src="https://unpkg.com/readometer@1/dist/readometer.iife.js" crossorigin type="text/javascript"></script>
```

## Use
The library needs a DOM element and language of the text inside that DOM element:
```js
const meter = new Readometer()
meter.on('progress', function(progress) {
  console.log('User read ' + progress + ' percent of the text.')
})
meter.start( document.getElementById('sample1'), 'en' )
```

## Algorithm
Basically there are two parameters that measure the progress of reading. **The average reading speed by language** and **the size of the scrollable area**.

The library creates a target reading time according to the number of words inside DOM element, language of the text, and average reading speed. Then it checks if the DOM element has a scroll and creates scroll points according to the visible area of the DOM element. Those points must be passed by user by scrolling in order to progress reading.

A simple event emitter integrated to the library therefore you can listen for reading progress from 0 to 100.

There is also a visiblityState listener inside the library which excludes the time of reading when the browser tab is not active. ([Read more about visibilityState API](https://developer.mozilla.org/en-US/docs/Web/API/Document/visibilityState))

Choose a text-only DOM element for more precise results.

## Tests
See tests folder for example cases.

## Notes
Average reading speeds by language are taken from:

[https://www.irisreading.com/average-reading-speed-in-various-languages/](https://www.irisreading.com/average-reading-speed-in-various-languages/)

---

## Distributions Report
This is an auto-generated report that shows the type, name and size of the bundles available to use individually.

[comment]: # (DISTRIBUTIONS_REPORT_START)
```js
[
  "readometer.amd.js (3.63 KB)",
  "readometer.amd.polyfilled.js (20.40 KB)",
  "readometer.cjs.js (3.58 KB)",
  "readometer.cjs.polyfilled.js (20.36 KB)",
  "readometer.es.js (3.51 KB)",
  "readometer.es.polyfilled.js (20.30 KB)",
  "readometer.iife.js (3.62 KB)",
  "readometer.iife.polyfilled.js (20.39 KB)",
  "readometer.umd.js (3.93 KB)",
  "readometer.umd.polyfilled.js (20.71 KB)"
]
```
[comment]: # (DISTRIBUTIONS_REPORT_END)

## Babel Polyfills Report
This is an auto-generated report that shows the pollyfils added by core-js to the **pollyfilled** distributions based on the targets configuration described below.

[comment]: # (BABEL_POLYFILLS_REPORT_START)
```js
// polyfills:
[
  "es.symbol",
  "es.symbol.description",
  "es.symbol.iterator",
  "es.array.iterator",
  "es.object.get-prototype-of",
  "es.object.set-prototype-of",
  "es.object.to-string",
  "es.reflect.construct",
  "es.regexp.to-string",
  "es.string.iterator",
  "web.dom-collections.iterator",
  "es.array.concat",
  "es.array.filter",
  "es.number.constructor",
  "es.number.parse-float",
  "es.regexp.exec",
  "es.string.split",
  "web.timers"
]
// based on the targets:
{
  "android": "4.4.3",
  "chrome": "49",
  "edge": "17",
  "firefox": "52",
  "ie": "9",
  "ios": "9.3",
  "opera": "66",
  "safari": "11.1",
  "samsung": "4"
}
```
[comment]: # (BABEL_POLYFILLS_REPORT_END)

Thanks for watching 🐬

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/F1F1RFO7)

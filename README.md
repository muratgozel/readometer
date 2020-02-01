# Readometer
The correct reading progress measurer.

Uses a combination of **time spent on the dom element** and **scroll points** to track the reading progress of the user. Spent time, effects the reading progress based on average reading speed and language of the text.

## Installation
Through npm:
```sh
npm i readometer
```
Thorugh cdn:
```html
<script type="text/javascript" src="https://unpkg.com/readometer@1/dist/umd/index.js"></script>
```

## Usage
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
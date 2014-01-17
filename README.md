jshelpers
=========

A bunch of small Javascript utilities


###Date formatter
(JSFiddle)[http://jsfiddle.net/chambs/VYkSJ/]

###Webworker Wrapper use


On the webworker:
```javascript
importScripts('ww.js');
var workerWrapper = ww(null, self);

workerWrapper.on('myEvent', function(data) {
  //do somnething with data
  //data is an object of MessageEvent
});

workerWrapper.emit('myEvent', {
  anything: 1,
  bla: 'hai'
});
```

On the "client":
```javascript
var workerWrapper = ww('worker.js');

//The on and emit events work just the same way

workerWrapper.on('myEvent', function(data) {
  //do somnething with data
  //data is an object of MessageEvent
});

workerWrapper.emit('myEvent', {
  anything: 1,
  bla: 'hai'
});
```


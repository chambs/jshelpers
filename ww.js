var ww = (function() {

	var events = {};

	function on (eventname, cb) {
		events[eventname] = cb;
	}

	function trigger (eventname, data) {
		if (eventname in events) {
			events[eventname](data);
		}
	}

	function emit (eventname, data) {
		data.eventname = eventname;
		this.w.postMessage(data)
	}

	return function (script, worker) {
		if (script) {
			this.w = new Worker(script);
		} else {
			this.w = worker;
		}

		this.on = on;
		this.emit = emit;

		this.w.addEventListener('message', function (msg) {
			var ev = msg.data.eventname;
			trigger(ev, msg);
		});
	}
})();

/*
How to use it
----------------

In the webworker (myworker.js):
importScripts('ww.js');
var workerWrapper = new ww(null, self);

workerWrapper.on('myEvent', function(ev) {
	//do somnething with ev.data
	//ev is an object of MessageEvent
});

workerWrapper.emit('myEvent', {
	anything: 1,
	bla: 'hai'
});


In the "client":
var workerWrapper = new ww('worker.js');

//The on and emit events work just the same way

workerWrapper.on('myEvent', function(ev) {
	//do somnething with ev.data
	//ev is an object of MessageEvent
});

workerWrapper.emit('myEvent', {
	anything: 1,
	bla: 'hai'
});

*/

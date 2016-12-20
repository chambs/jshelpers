importScripts('ww.js');
var workerWrapper = new ww(null, this);

workerWrapper.on('heavyTask', function (ev) {
	var data = ev.data,
			n = data.n,
			i = 0,
			result = 0;

	for (i; i < n; i++) {
		result++;
	}
	workerWrapper.emit('heavyTask', {result: result});
});

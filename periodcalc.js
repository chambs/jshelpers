//dt as timestamp
//today as timestamp or null
function pc(dt, today) {

	var timeLabels = ['seconds', 'minutes', 'hours', 'days', 'years'],
        times = [1000, 60, 60, 24, 365],
        len = times.length,
        i = 0,
        currentNum,
        cacheNum;

	//if today is not given, use user computer's date
	if(!today) {
		today = Date.now();
	}

    currentNum = today - dt;
    
    for(i; i < len; i++) {
        currentNum /= times[i];
        if(~~currentNum <= 0) {
            break;
        }
        cacheNum = currentNum;
    }
    
    return {time: ~~cacheNum, label: timeLabels[i-1]};
}

//someone's birthday
var bday = new Date(1981, 4, 14);

var result = pc(1386248788435);
console.log(result);

result = pc(bday);
console.log(result);
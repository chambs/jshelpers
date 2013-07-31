/*date formatter*/

//adds zeros to left on numbers lower than 10
function zero(n) {
    return (n >= 10 ? n : '0'+n);
}

//d: Date object
// mask: String which reads yyyy, mm, dd, hh, mn, ss
function dfmt(d, mask) {
    var D = {
        yyyy: d.getFullYear(),
        mm: zero(d.getMonth()+1),
        dd: zero(d.getDate()),
        
        hh: zero(d.getHours()),
        mn: zero(d.getMinutes()),
        ss: zero(d.getSeconds())
    },
        re = /yyyy|dd|mm|hh|mn|ss/gi,
        
        result = mask.replace(re, function(str) {
            return (D[str]);
        });

    return result;
}


x = dfmt(new Date(), 'Date is: dd/mm/yyyy. Time is hh:mn:ss');
console.log(x);

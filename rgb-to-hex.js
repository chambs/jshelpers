var re = /rgb[ ]*\([ ]*(\d{1,3})[ ]*,[ ]*(\d{1,3})[ ]*,[ ]*(\d{1,3})[ ]*\)[ ]*/i;

function doConvert(str, a, b, c) {
    return (+a).toString(16) + (+b).toString(16) + (+c).toString(16);
}

function rgbToHex(c) {
    return c.replace(re, doConvert);
}

//testing
var hex = rgbToHex('rgb(222, 111, 190)');
console.log('#' + hex);

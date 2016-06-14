//The code that is fired upon page load
//to check your plugin js is working uncomment the next line.
//var replace_str = $('body').html().replace(/./g,'-');

// //string to hex
// String.prototype.hexEncode = function(){
//     var hex, i;

//     var result = "";
//     for (i=0; i<this.length; i++) {
//         hex = this.charCodeAt(i).toString(16);
//         result += ("000"+hex).slice(-4);
//     }

//     return result
// }

// //hex to string
// String.prototype.hexDecode = function(){
//     var j;
//     var hexes = this.match(/.{1,4}/g) || [];
//     var back = "";
//     for(j = 0; j<hexes.length; j++) {
//         back += String.fromCharCode(parseInt(hexes[j], 16));
//     }

//     return back;
// }

var text_str = $('body').text();
//console.log(text_str);
///var replace_str = $('body').html().replace(/./g,'');
// for(var i=0;i<text_str.length;i++)
// {

// var ok=text_str.charAt(i).toString().toUpperCase();
// //var nice=Array(4 - ok.length + 1).join('0') + ok;
// }
String.prototype.convertToHex = function (delim) {
    return this.split("").map(function(c) {
        return ("0" + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(delim || "");
};
var ok="Zelda".convertToHex();
//$('body').innerHTML(text_str.convertToHex());
document.body.innerHTML = document.body.innerHTML.replace(/./g, ok);
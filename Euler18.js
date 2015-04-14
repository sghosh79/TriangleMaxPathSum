var request = require('request');
var arrayOfStrings = [];
var array = [];
var delimiter = ' '; // split at each space

request('http://www.blablabla.com/path.txt', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        body.split(delimiter).forEach(function (item, index) {
            arrayOfStrings.push(item); // add the item to the array as a string
            array.push(parseInt(item)); // add the item to the array as an Integer—we're assuming that item is a whole number

    var current = [];
    var currentLen;
    var arrayedit = [];
    var currentsum = 0;
    var prevsum;
    var temparray;
    var len = array.length;

    var quad = (1/2)*(-1 + Math.sqrt(1+4*1*2*len));


    for (n = 1; n <= quad; n++) {

      currentsum += n;
      prevsum = currentsum - n;

     temparray = array.slice(prevsum,currentsum);

      arrayedit.push(temparray);   

    }


    while (arrayedit.length !== 1) {
      var len = arrayedit.length;
      var row = [];
      current = arrayedit[len-2];
      currentLen = current.length - 1;
      var end = arrayedit[len-1];

      for ( var i = 0; i <= currentLen; i++ ) {
        row.push(Math.max(current[i] + end[i] || 0, current[i] + end[i+1] || 0) );
      }

      arrayedit.pop();
      arrayedit.pop();

      arrayedit.push(row);
    }

    console.log(arrayedit[0][0]);
        });
    }
})
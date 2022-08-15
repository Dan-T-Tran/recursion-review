// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:


var stringifyJSON = function(obj) {
  // your code goes here
/*
i: object
o: string
c: n/a
e: input is string, num, bool, array


identify the data type of obj
  take the data that obj represents and wrap in quotations
      if the data is nested, check data types and stringify
*/

  if (typeof obj === 'boolean' || typeof obj === 'number' || obj === null) {
    return '' + obj;
  }

  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  if (Array.isArray(obj)) {
    var result = [];
    if (obj.length === 0) {
      return '[]';
    }
    for (var i = 0; i < obj.length; i++) {
      result.push(stringifyJSON(obj[i]));
    }
    return '[' + result + ']';
  }

  if (typeof obj === 'object' && !Array.isArray(obj) ) {
    var objResult = '{';
    var index = Object.keys(obj).length;
    for (var keys in obj) {
      if (typeof obj[keys] !== 'function' && obj[keys] !== undefined) {
        objResult += (stringifyJSON(keys) + ':');
        objResult += stringifyJSON(obj[keys]);
        index--;
        if (!(index === 0)) {
          objResult += ',';
        }
      }
    }
    return objResult + '}';
  }

};
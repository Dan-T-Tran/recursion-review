// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  //check for type using the first character of string
  // if(json[0] === '['){
  //   return [];
  // }

  //if type is string, boolean or number return the primitive




  //if type is array or object then recursive case
  console.log(json);
  return JSON.parse(json);


};

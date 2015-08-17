// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // if base case
  if(typeof obj === "number" || typeof obj === "boolean" || obj === null)
    return "" + obj;
  // if string add quotes
  if (typeof obj === "string"){
    return '"' + obj + '"';
  }
  // if obj is an array
  if (Array.isArray(obj)) {
    var result = [];
    for (var i = 0; i < obj.length; i++) {
      result.push(stringifyJSON(obj[i]));
    }
    return '[' + result.join(',') + ']';
    // return '[' + something + ']';
  } else if (typeof obj === "object") {
    var storage = [];
    for (var key in obj){
      if (typeof obj[key] !== "function"  && obj[key] !== undefined) {
        storage.push(stringifyJSON(key) + ":" + stringifyJSON(obj[key]));
      }
    }
    return '{' + storage.join(',') + '}';
  }
  // if (typeof obj === "object" && !Array.isArray(obj) && obj !== undefined && obj !== null) {
  //  if(Object.getOwnPropertyNames(obj).length===0) {
  //   return '{' + obj + '}'
  //   }
  // }
};

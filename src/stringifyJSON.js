// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // base cases
  if(obj===null){
    return "null";
  }
  if(typeof obj === "string"){
    return  "\u0022"+obj+"\u0022";
  }
  if(typeof obj === "number" || typeof obj === "boolean"){
    return obj.toString();
  }
  if(Array.isArray(obj)){  //If array
    var strung=_.map(obj,stringifyJSON);
    return "[" + strung + "]";
  }
};

// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var elements = [];
  var hasTheClass = function(node){
  	return _.contains(node.classList, className);
  };
  var hasChildren = function(node){
  	return node.childNodes.length>0;
  };
  var addElement = function(node){
  	if(hasTheClass(node)){
  	  elements.push(node);
  	}
  };
  addElement(document.body);
  return elements;
};

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
  	  elements.push(node);
  };
  var grab = function(currentNode){
  	if(hasTheClass(currentNode)){             //Base case, collect element if it has the class
  		addElement(currentNode);
  		return;
  	}else if(hasChildren(currentNode)){		//Recursive case, search children
  		var children = currentNode.childNodes;
  		var beenCalled 
  		return _.each(children, grab);
  	}else{						//Termination case, dead end
  		return;
  	}
  };
  grab(document.body);
  return elements;
};

// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, element) {
    // your code here
    /*
    I: string w/ target class name
    O: an array
    C: n/a
    E: unkonwn depth of child nodes
    */
    if (!element) {
      element = document.body;
    }
    var result = [];

    if (element.classList.contains(className)) {
      result.push(element);
    }

    for (var i = 0; i < element.children.length; i++) {
      result = result.concat(getElementsByClassName(className, element.children[i]));

    }



    return result;

  };


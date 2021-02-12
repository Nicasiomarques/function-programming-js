// ex1
var addTo = function (passed) {
  var inner = 3;
  return passed + inner;
};

console.log(addTo(2));

var addTo = function (passed) {
  var add = function (inner) {
    return passed + inner;
  };
  return add;
};

var addThree = addTo(3);
var addOne = addTo(1);

console.log(addOne);
console.log(addThree);

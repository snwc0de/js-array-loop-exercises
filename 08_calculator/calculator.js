const add = function(one, two) {
  return one + two;
};

const subtract = function(one, two) {
	return one - two;
};

const sum = function(array) {
	return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
  return array.reduce((total, current) => total * current);
};

const power = function(one, two) {
	return one ** two;
};

const factorial = function(num) {
  let sum = 1;
	for (let i = 1; i <= num; i++) {
    sum *= i;
  }
  return sum
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

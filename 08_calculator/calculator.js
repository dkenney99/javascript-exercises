const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(array) {
	const total = array.reduce((curr, next) => {
    return curr + next;
  }, 0);
  return total;
};

const multiply = function(array) {
  const total = array.reduce((curr, next) => {
    return curr * next;
  }, 1);
  return total;
};

const power = function(digit, exponent) {
  let initial = 1;
	for (let i = 0; i < exponent; i++) {
    initial *= digit;
  }
  return initial;
};

const factorial = function fact(num) {
  if (num == 0) {
    return 1;
  } else {
    return fact(num - 1) * num;
  }
	
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

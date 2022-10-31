const fibonacci = function fib(num) {
    if (num <= 1) {
        return num;
    } else {
        return fib(num - 1) + fib(num - 2);
    } 
    // if (digit < 0) {
    //     return "OOPS"
    // }


};

// Do not edit below this line
module.exports = fibonacci;

const reverseString = function(string) {
    const stringArray = string.split("")
    const output = stringArray.reverse().join("");
    return output;
};

// Do not edit below this line
module.exports = reverseString;

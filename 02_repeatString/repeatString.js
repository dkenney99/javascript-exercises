const repeatString = function(string, times) {
    let output = ""
    if (times < 0) {
        return "ERROR"
    }
    for (let i = 0; i < times; i++) {
        output += string;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;

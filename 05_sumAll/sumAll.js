const sumAll = function(start, end) {
    let total = 0;
    const allTheNumbers = [];

    if (start > end) {
        for (let i = end; i <= start; i++) {
            allTheNumbers.push(i);
        }
    } else {
        for (let i = start; i <= end; i++) {
            allTheNumbers.push(i);
        }
    }

    total = allTheNumbers.reduce(
        (curr, acc) => curr + acc, 0
    );

    if (start < 0 || end < 0) {
        return "ERROR"
    } else if (typeof start == "string" || typeof end == "string") {
        return "ERROR"
    } else if (typeof start == "object" || typeof end == "object") {
        return "ERROR"
    }

    return total;

};

// Do not edit below this line
module.exports = sumAll;

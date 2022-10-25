const removeFromArray = function(array, ...removals) {
    const output = array;

    removals.forEach(removal => {
        let index = array.indexOf(removal);
        if (index >= 0) {
            output.splice(index, 1)
        }
    })

    return output;
};

// Do not edit below this line
module.exports = removeFromArray;

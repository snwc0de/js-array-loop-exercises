const removeFromArray = function(array, ...arg) {
    let final = [];
    array.forEach(element => {
        if (!arg.includes(element)) {
            final.push(element)
        }
    });
    return final;
};

// Do not edit below this line
module.exports = removeFromArray;

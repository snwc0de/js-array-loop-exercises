const sumAll = function(first, second) {

    if (first > second) {
        const temp = first;
        first = second;
        second = temp;
    }

    if (first < 0 || second < 0) return "ERROR";
    if (!Number.isInteger(first) || !Number.isInteger(second)) return "ERROR";
    
    
    let final = 0;
    for (let i = first; i <= second; i++) {
        final += i;
        
    }
    return final;
};

// Do not edit below this line
module.exports = sumAll;

const removeFromArray = function() {
    const argumentArray = Array.from(arguments);
    let array = argumentArray[0];
    for (let i = 1; i < argumentArray.length; i++) {
        if (array.includes(argumentArray[i])) {
            array.splice(array.indexOf(argumentArray[i]), 1);
        }
    }
    return array
};


// Do not edit below this line
module.exports = removeFromArray;

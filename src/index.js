
exports.min = function min (array = undefined) {
    if (array == undefined || array.length == 0){
        return 0
    }
    let min = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}

exports.max = function max (array = undefined) {
    if (array == undefined || array.length == 0){
        return 0
    }
    let max = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
  return max;
}

exports.avg = function avg (array = undefined) {
    if (array == undefined || array.length == 0){
        return 0
    }
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    if (array.length === 0 || array === undefined){
        return 0
    }
  return array.reduce(reducer)/array.length;
}

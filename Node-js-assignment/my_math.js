const pivalue = 3.14;

function addvalue(x, y) {
    return x + y;
}

function subtractvalue(x, y) {
    return x - y;
}

function mulitplyvalue(x, y) {
    return x * y;
}

function dividevalue(x, y) {
    return x / y;
}


module.exports = {
    add: addvalue,
    subtract: subtractvalue,
    multiply: mulitplyvalue,
    divide: dividevalue,
    pi: pivalue
}






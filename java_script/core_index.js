let n1 = document.getElementById('n1');
let n2 = document.getElementById('n2');
let res;

function button_plus() {
    res = (n1.value * 1) + (n2.value * 1)
}

function button_minus() {
    res = (n1.value * 1) - (n2.value * 1)
}

function button_multiply() {
    res = (n1.value * 1) * (n2.value * 1)
}

function button_divide() {
    res = (n1.value * 1) / (n2.value * 1)
}

function result() {
    document.getElementById('res').innerHTML = `Result: ${res}`;
}
/**
 * get number function implement
 */
function number(num) {
    var result = document.getElementById("input");
    result.value += num;
}

/**
 * get result function 
 * its implements just basic way
 */
function result() {
    var result = document.getElementById('input');
    result.value = eval(result.value)
}

/**
 * clear input fiend
 */
function clearResult() {
    var result = document.getElementById('input')
    result.value = "";
}

// backspace function 
function deleteChar() {
    var number = document.getElementById('input')
    var remove = number.value;
    remove = remove.slice(0, -1);
    number.value = remove;

}
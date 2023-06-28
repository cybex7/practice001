// FIRST PRACTICE
// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
function pow(x, n) {
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
    alert(`Power ${n} is not supported, use a positive integer`);
} else {
    alert(pow(x, n));
}


// SECOND PRACTICE
/* Rewrite the function using '?' or '||'
The following function returns true if the parameter age is greater than 18 */
function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
}

function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
}


// THIRD PRACTICE
// Write a function min(a,b) which returns the least of two numbers a and b.
function min(a, b) {
    return a < b ? a : b;
}
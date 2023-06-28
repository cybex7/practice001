// ##############  PRACTICE ONE ############## 
// Use the for loop to output even numbers from 2 to 10.
function outputEvenNumbers() {
    for (let i = 2; i <= 10; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

outputEvenNumbers();



// ############## PRACTICE TWO ############## 
// Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).

// for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
// }

let i = 0;
while (i < 3) {
    alert(`number ${i}!`);
    i++;
}
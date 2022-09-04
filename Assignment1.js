// Write a program to find whether a given year is a leap year or not.
let year = prompt("Enter Year");

function isLeapYear(year) {
    if (year % 400 == 0) {
        console.log(`${year} is a Leap Year`);
    } else if (year % 100 == 0) {
        console.log(`${year} is not a Leap Year`);
    } else if (year % 4 == 0) {
        console.log(`${year} is a Leap Year`);
    } else {
        console.log(`${year} is not a Leap Year`);
    }
}

isLeapYear(year);


// Write a JavaScript program to convert temperatures to and from Celsius,
// Fahrenheit.
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in
// Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C

function celToFer(cel) {
    let fer = ((cel / 5) * 9) + 32;
    console.log(`${cel}℃ is ${fer}℉`);
}

function ferToCel(fer) {
    let cel = ((fer - 32) / 9) * 5;
    console.log(`${fer}℉ is ${cel}℃`);
}

let temp = prompt("Enter Temperature with Ref C for Celcius and F for Fahrenheit in End. Example:- 100C or 100F");
let val = temp.substring(0, temp.length - 1);
if (temp.includes('F' || 'f') && !isNaN(val)) {
    ferToCel(val);
} else if (temp.includes('C' || 'c') && !isNaN(val)) {
    celToFer(val);
} else {
    console.log("Invalid Input");
}



// Write a program to find the factorial of a number.

let num = prompt("Enter Number");

function factorial(num) {
    let res = 1;
    while (num > 1) {
        res *= num;
        num--;
    }
    return res;
}

console.log(`Factorial of ${num} is ${factorial(num)}`);
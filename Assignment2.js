// 1. Write a Javascript function to check whether a triangle is equilateral, isosceles or scalene

function checkTypeOfTriangle(x, y, z) {
    if (x == y && y == z)
        console.log("This is Equilateral Triangle");
    else if (x == y || y == z || z == x)
        console.log("This is Isosceles triangle");
    else
        console.log("This is Scalene");
}


let x = 3;
let y = 3;
let z = 3;
checkTypeOfTriangle(x, y, z);


// 2. Write a function using switch case to find the grade of a student based
// on marks obtained
// a. “S grade” if the marks are between 90 and 100.
// b. “A grade” if the marks are between 80 and 90.
// c. “B grade” if the marks are between 70 and 80.
// d. “C grade” if the marks are between 60 and 70.
// e. “D grade” if the marks are between 50 and 60.
// f. “E grade” if the marks are between 40 and 50.
// g. “Student has failed” if the marks are between 0 and 40.
// h. Else output “Invalid marks”.

function findGrade(marks) {
    console.log(marks);
    switch (true) {
        case (marks > 90 && marks <= 100):
            return "S Grade";
            break;

        case (marks > 80 && marks <= 90):
            return "A Grade";
            break;

        case (marks > 70 && marks <= 80):
            return "B Grade";
            break;

        case (marks > 60 && marks <= 70):
            return "C Grade";
            break;

        case (marks > 50 && marks <= 60):
            return "D Grade";
            break;

        case (marks > 40 && marks <= 50):
            return "E Grade";
            break;

        case (marks >= 0 && marks <= 40):
            return "Student has failed";
            break;

        default:
            return "Invalid Marks";
            break;
    }
}

console.log(findGrade(55));


// 3. Write a JavaScript program to find the sum of the multiples of 3 and 5 under 1000

function sumOfMultiplesOf3And5() {
    let total = 0;
    let three = 0;
    let five = 0;
    for (let i = 0; i < 1000; i++) {
        if (i % 3 === 0) {
            total += i;
        } else if (i % 5 === 0) {
            total += i;
        }
    }
    return total;
}

console.log(sumOfMultiplesOf3And5());


// 4. Write a program to find the factorial of all prime numbers between a given range . Range will be passed as 2 values in the function parameters. eg- if it is needed to find the values for numbers 1-100, then function declaration can look like - function prime(1,100).

function printAllPrimeNumberInBetween(start, end) {
    let prime = [];
    for (let i = start; i <= end; i++) {
        if (i % 2 != 0) {
            let isPrime = true;
            for (let j = 3; j <= i / 2; j++) {
                if (i % j === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) prime.push(i);
        }
    }
    return prime;
}

console.log(printAllPrimeNumberInBetween(0, 25));



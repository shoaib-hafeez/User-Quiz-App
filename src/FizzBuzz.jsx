import React from 'react'

const FizzBuzz = () => {
    // JavaScript program for Fizz Buzz Problem 
    // by checking every integer individually

    // function fizzBuzz(n) {
    //     let res = [];

    //     for (let i = 1; i <= n; ++i) {

    //         // Check if i is divisible by both 3 and 5
    //         if (i % 3 === 0 && i % 5 === 0) {

    //             // Add "FizzBuzz" to the result array
    //             res.push("FizzBuzz");
    //         } 

    //         // Check if i is divisible by 3
    //         else if (i % 3 === 0) {

    //             // Add "Fizz" to the result array
    //             res.push("Fizz");
    //         } 

    //         // Check if i is divisible by 5
    //         else if (i % 5 === 0) {

    //             // Add "Buzz" to the result array
    //             res.push("Buzz");
    //         } 
    //         else {

    //             // Add the current number as a string to the
    //             // result array
    //             res.push(i.toString());
    //         }
    //     }
    //     return res;
    // }

    // // Driver code
    // let n = 20;
    // let res = fizzBuzz(n);
    // console.log(res.join(' '));





    for (let i = 0; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("fizzBuzz");
        } else if (i % 5 == 0) {
            console.log("Buzz");
        } else if (i % 3 == 0) {
            console.log("fizz");
        } else {
            console.log(i);
        }
    }

    for (let number = 0; number <= 100; number++) {
        if (number % 3 === 0 && number % 5 === 0) {
            console.log('FizzBuzz')
        } else if (number % 3 === 0) {

        }
        return (
            <div>FizzBuzz</div>
        )
    }

}

    export default FizzBuzz;
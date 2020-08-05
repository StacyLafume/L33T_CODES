// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

const sameFrequency = (num1, num2) => {
    // make num1 and num2 into an array numbers
    const strArrNum1 = num1.toString().split('');
    const strArrNum2 = num2.toString().split('');

    // object to hold the frequency of the digits
    let numList = {}

    // loop through strArrNum1
    for(let i = 0; i<strArrNum1.length; i++){
        // create a variable that holds the vaule of each number
        let number = strArrNum1[i];
        // if number exists in numlist than add 1 to it's occurances if not make it one 
        numList[number] ? numList[number] += 1 : numList[number] = 1
    }

    // loop through strArrNum2
    for(let i = 0; i<strArrNum2.length; i++){
        // create a variable that holds the vaule of each number
        let number = strArrNum2[i];
          // if number does not exists in numlist
        if(!numList[number]){
            // return false 
            return false;
        }else{
            // other wise return subtract one from the occurances
             numList[number] -= 1
        }
    }
  // return true
  return true
}
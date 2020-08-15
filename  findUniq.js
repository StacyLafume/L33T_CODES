// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

const findUniq = arr => {
    let numberList = {};
    for (let elem of arr){
      numberList[elem] ? numberList[elem] += 1 : numberList[elem] = 1
    }
    for (let key in numberList){
      if( numberList[key] === 1){
        return parseFloat(key)
      }
    }
  }